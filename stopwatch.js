// Stopwatch functionality
const timerDisplay = document.querySelector(".draggable#stopwatch");
let timerInterval;
let timerStartTime;
let timerRunning = false;
let spacebarPressed = false;

function updateTimer() {
  const currentTime = Date.now();
  const elapsedTime = currentTime - timerStartTime;
  const minutes = Math.floor(elapsedTime / 60000);
  const seconds = Math.floor((elapsedTime % 60000) / 1000);
  const milliseconds = elapsedTime % 1000;

  timerDisplay.innerHTML = `${minutes}:${String(seconds).padStart(
    2,
    "0"
  )}.${String(milliseconds).padStart(3, "0")}`;
}

// Event listener for spacebar press
document.addEventListener("keydown", function (event) {
  if (event.key === " ") {
    event.preventDefault(); // Prevent the spacebar from scrolling the page
    if (timerRunning) {
      // If the stopwatch is running, stop it and go to inactive state
      clearInterval(timerInterval);
      timerRunning = false;
      timerDisplay.style.backgroundColor = ""; // Set to inactive state (no color)
    } else if (!spacebarPressed) {
      // If the spacebar was not previously pressed, change to ready state
      spacebarPressed = true;
      timerDisplay.style.backgroundColor = "#FFA500"; // Set to ready state (yellow)
    }
  }
});

// Event listener for spacebar release to start the stopwatch
document.addEventListener("keyup", function (event) {
  if (event.key === " " && spacebarPressed && !timerRunning) {
    event.preventDefault(); // Prevent the spacebar from scrolling the page
    // Start the timer
    timerStartTime = Date.now();
    timerInterval = setInterval(updateTimer, 10);
    timerRunning = true;
    timerDisplay.style.backgroundColor = "#00FF00"; // Set to active state (green)
    spacebarPressed = false;
  }
});

// Event listener for any key press to stop the stopwatch and go to inactive state
document.addEventListener("keydown", function (event) {
  if (timerRunning) {
    // Any key press stops the timer and goes to inactive state
    clearInterval(timerInterval);
    timerRunning = false;
    timerDisplay.style.backgroundColor = ""; // Set to inactive state (no color)
  }
});
