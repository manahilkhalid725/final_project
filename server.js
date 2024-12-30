require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { body, validationResult } = require('express-validator');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/listingDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Define the User schema
const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['user', 'admin'], default: 'user' },
  },
  { timestamps: true }
);
const User = mongoose.model('User', userSchema);

// Define the Listing schema
const listingSchema = new mongoose.Schema(
  {
    image: String,
    location: String,
    rating: Number,
    distance: String,
    dates: String,
    price: String,
    members: Number,
  },
  { timestamps: true }
);
const Listing = mongoose.model('Listing', listingSchema);

// Middleware to authenticate JWT and check for user roles
const authenticateJWT = (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1];
  console.log('Received Token:', token);  // Log the token to check if it's correct
  if (!token) {
    return res.status(403).json({ message: 'Access denied. Token is required.' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid token' });
    }
    req.user = user;
    next();
  });
};

const isAdmin = (req, res, next) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ message: 'Admin access required' });
  }
  next();
};

// User Login (Now checks for both user and admin)
app.post('/api/users/login', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Please enter both email and password.' });
  }

  // Hardcoded Admin Credentials
  const adminEmail = 'admin123@gmail.com';
  const adminPassword = 'admin123';

  try {
    // Check if the credentials match the hardcoded admin credentials
    if (email === adminEmail && password === adminPassword) {
      // If they match, treat the user as an admin
      const token = jwt.sign(
        { email: adminEmail, role: 'admin' },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
      );
      return res.json({ message: 'Admin login successful', token, role: 'admin' });
    }

    // Otherwise, check if it's a regular user in the database
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }

    // Compare the hashed password for regular users
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Create a JWT token for the regular user
    const token = jwt.sign(
      { userId: user._id, email: user.email, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.json({ message: 'User login successful', token, role: user.role });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error logging in', error: err });
  }
});

// User Signup
app.post(
  '/api/users/signup',
  [
    body('email').isEmail().withMessage('Please provide a valid email'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
    body('username').notEmpty().withMessage('Username is required'),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { username, email, password } = req.body;

    try {
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new User({ username, email, password: hashedPassword });
      await newUser.save();

      res.status(201).json({ message: 'User registered successfully' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Error registering user', error: err });
    }
  }
);

// Listing Routes
app.get('/api/listings', async (req, res) => {
  try {
    const listings = await Listing.find();
    res.json(listings);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching listings', error: err });
  }
});

app.get('/api/listings/:id', async (req, res) => {
  try {
    const listing = await Listing.findById(req.params.id);
    if (!listing) {
      return res.status(404).json({ message: 'Listing not found' });
    }
    res.json(listing);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching listing', error: err });
  }
});

app.post('/api/listings', authenticateJWT, isAdmin, async (req, res) => {
  try {
    const newListing = new Listing(req.body);
    const savedListing = await newListing.save();
    res.status(201).json({ message: 'Listing created successfully', listing: savedListing });
  } catch (err) {
    res.status(500).json({ message: 'Error creating listing', error: err });
  }
});

app.put('/api/listings/:id', authenticateJWT, isAdmin, async (req, res) => {
  try {
    const updatedListing = await Listing.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedListing) {
      return res.status(404).json({ message: 'Listing not found' });
    }
    res.json({ message: 'Listing updated successfully', listing: updatedListing });
  } catch (err) {
    res.status(500).json({ message: 'Error updating listing', error: err });
  }
});

app.delete('/api/listings/:id', authenticateJWT, isAdmin, async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    console.error('Invalid ID:', req.params.id);
    return res.status(400).json({ message: 'Invalid listing ID' });
  }

  try {
    const deletedListing = await Listing.findByIdAndDelete(req.params.id);
    if (!deletedListing) {
      console.error('Listing not found for ID:', req.params.id);
      return res.status(404).json({ message: 'Listing not found' });
    }
    console.log('Deleted listing:', deletedListing);
    res.json({ message: 'Listing deleted successfully' });
  } catch (err) {
    console.error('Error during deletion:', err);
    res.status(500).json({ message: 'Error deleting listing', error: err });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});