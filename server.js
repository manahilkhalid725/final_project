const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect('mongodb://localhost:27017/listingDB', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected to localhost:27017'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Define the User schema
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);

// Define the Listing schema
const listingSchema = new mongoose.Schema({
  image: String,
  location: String,
  rating: Number,
  distance: String,
  dates: String,
  price: String,
  members: Number,
});

// Define the Booking schema
const bookingSchema = new mongoose.Schema({
  listingId: { type: mongoose.Schema.Types.ObjectId, ref: 'Listing' }, // Reference to Listing
  checkInDate: String,
  checkOutDate: String,
  user: String, // Optionally, add a user field to associate bookings with users
});

// Create models
const Listing = mongoose.model('Listing', listingSchema);
const Booking = mongoose.model('Booking', bookingSchema);

// User Registration (Signup)
app.post('/api/users/signup', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error registering user', error: err });
  }
});

// User Login
app.post('/api/users/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }

    // Compare the password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Generate a JWT token
    const token = jwt.sign({ userId: user._id }, 'your_jwt_secret', { expiresIn: '1h' });

    res.json({ message: 'Login successful', token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error logging in', error: err });
  }
});

// Routes for Listings and Bookings

// GET: Fetch all listings
app.get('/api/listings', async (req, res) => {
  try {
    const listings = await Listing.find();
    res.json(listings);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching listings from the database', error: err });
  }
});

// GET: Fetch a single listing by ID
app.get('/api/listings/:id', async (req, res) => {
  try {
    const listing = await Listing.findById(req.params.id);
    if (listing) {
      res.json(listing);
    } else {
      res.status(404).json({ message: 'Listing not found' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Error fetching listing from the database', error: err });
  }
});

// POST: Add a new listing
app.post('/api/listings', async (req, res) => {
  try {
    const newListing = new Listing(req.body);
    const savedListing = await newListing.save();
    res.status(201).json({ message: 'Listing created successfully', listing: savedListing });
  } catch (err) {
    res.status(500).json({ message: 'Error creating listing', error: err });
  }
});

// GET: Fetch all bookings
app.get('/api/bookings', async (req, res) => {
  try {
    const bookings = await Booking.find().populate('listingId'); // Populate listing details
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching bookings from the database', error: err });
  }
});

// POST: Add a new booking
app.post('/api/bookings', async (req, res) => {
  try {
    const { listingId, checkInDate, checkOutDate, user } = req.body;
    const newBooking = new Booking({ listingId, checkInDate, checkOutDate, user });
    const savedBooking = await newBooking.save();
    res.status(201).json({ message: 'Booking created successfully', booking: savedBooking });
  } catch (err) {
    res.status(500).json({ message: 'Error creating booking', error: err });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
