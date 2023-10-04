// Stopwatch functionality
const timerDisplay = document.querySelector(".draggable#stopwatch");
let timerInterval;
let timerStartTime;
let timerRunning = false;
let spacebarPressed = false;
const finalTimesList = document.getElementById("finalTimesList"); // Get the ordered list element

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
    event.preventDefault();
    if (timerRunning) {
      clearInterval(timerInterval);
      timerRunning = false;
      timerDisplay.style.backgroundColor = "";
      updateFinalTimes(); // Update the list when a solve is completed
    } else if (!spacebarPressed) {
      spacebarPressed = true;
      timerDisplay.style.backgroundColor = "#FFA500";
    }
  }
});

// Event listener for spacebar release to start the stopwatch
document.addEventListener("keyup", function (event) {
  if (event.key === " " && spacebarPressed && !timerRunning) {
    event.preventDefault();
    timerStartTime = Date.now();
    timerInterval = setInterval(updateTimer, 10);
    timerRunning = true;
    timerDisplay.style.backgroundColor = "#00FF00";
    spacebarPressed = false;
  }
});

// Function to update the list of final times
function updateFinalTimes() {
  const currentTime = timerDisplay.innerHTML;
  if (currentTime !== "Hold Spacebar to Ready\nRelease to Start") {
    const listItem = document.createElement("li");
    listItem.textContent = currentTime;
    finalTimesList.appendChild(listItem);
  }
}
