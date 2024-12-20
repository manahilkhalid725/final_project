// Get the buttons
const staysButton = document.querySelector('.btn:nth-child(1)');
const experiencesButton = document.querySelector('.btn:nth-child(2)');

// Add event listeners for click events on both buttons
staysButton.addEventListener('click', () => {
    staysButton.classList.add('active');            // Add active class to Stays button
    experiencesButton.classList.remove('active');   // Remove active class from Experiences button
});

experiencesButton.addEventListener('click', () => {
    experiencesButton.classList.add('active');     // Add active class to Experiences button
    staysButton.classList.remove('active');        // Remove active class from Stays button
});



const tabs = document.querySelectorAll(".scrollable-tabs-container a");
const rightArrow = document.querySelector(
  ".scrollable-tabs-container .right-arrow svg"
);
const leftArrow = document.querySelector(
  ".scrollable-tabs-container .left-arrow svg"
);
const tabsList = document.querySelector(".scrollable-tabs-container ul");
const leftArrowContainer = document.querySelector(
  ".scrollable-tabs-container .left-arrow"
);
const rightArrowContainer = document.querySelector(
  ".scrollable-tabs-container .right-arrow"
);

const removeAllActiveClasses = () => {
  tabs.forEach((tab) => {
    tab.classList.remove("active");
  });
};

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    removeAllActiveClasses();
    tab.classList.add("active");
  });
});

const manageIcons = () => {
  if (tabsList.scrollLeft >= 20) {
    leftArrowContainer.classList.add("active");
  } else {
    leftArrowContainer.classList.remove("active");
  }

  let maxScrollValue = tabsList.scrollWidth - tabsList.clientWidth - 20;
  console.log("scroll width: ", tabsList.scrollWidth);
  console.log("client width: ", tabsList.clientWidth);

  if (tabsList.scrollLeft >= maxScrollValue) {
    rightArrowContainer.classList.remove("active");
  } else {
    rightArrowContainer.classList.add("active");
  }
};

rightArrow.addEventListener("click", () => {
  tabsList.scrollLeft += 200;
  manageIcons();
});

leftArrow.addEventListener("click", () => {
  tabsList.scrollLeft -= 200;
  manageIcons();
});

tabsList.addEventListener("scroll", manageIcons);

let dragging = false;

const drag = (e) => {
  if (!dragging) return;
  tabsList.classList.add("dragging");
  tabsList.scrollLeft -= e.movementX;
};

tabsList.addEventListener("mousedown", () => {
  dragging = true;
});

tabsList.addEventListener("mousemove", drag);

document.addEventListener("mouseup", () => {
  dragging = false;
  tabsList.classList.remove("dragging");
});


document.querySelectorAll('.image-container i').forEach(heart => {
  heart.addEventListener('click', function() {
      // Toggle the 'liked' class to change the color
      this.classList.toggle('liked');
  });
});


// Select all icon buttons
document.querySelectorAll('.icon-button').forEach(button => {
  button.addEventListener('click', function() {
      // Remove 'active' class from all icon buttons
      document.querySelectorAll('.icon-button').forEach(b => b.classList.remove('active'));

      // Add 'active' class to the clicked icon button
      this.classList.add('active');
  });
});


document.querySelectorAll('.box1').forEach((box) => {
  const imageContainer = box.querySelector('.image-container');
  const leftArrow = box.querySelector('.left-arrow2');
  const rightArrow = box.querySelector('.right-arrow2');

  const initialImage = 'https://i.pinimg.com/736x/97/7c/f5/977cf5377928ebbd518f9fb2bdd814eb.jpg';
  const swappedImage = 'https://i.pinimg.com/736x/ea/bd/85/eabd85df09875471cbd59531231ed46c.jpg';

  let currentImage = initialImage;

  leftArrow.addEventListener('click', () => {
    imageContainer.style.transition = 'background-image 0.5s ease-in-out'; // Add transition
    currentImage = initialImage;
    imageContainer.style.backgroundImage = `url(${currentImage})`;
  });

  rightArrow.addEventListener('click', () => {
    imageContainer.style.transition = 'background-image 0.5s ease-in-out'; // Add transition
    currentImage = swappedImage;
    imageContainer.style.backgroundImage = `url(${currentImage})`;
  });
});
