// Function to handle the "Escape" key press
function handleEscapeKey(event) {
  if (event.key === "Escape") {
    hideSettings();
  }
}

// Function to hide the settings panel
function hideSettings() {
  settingsPanel.style.display = "none";
  document.removeEventListener("keydown", handleEscapeKey);
}

// Function to show the settings panel
function showSettings() {
  settingsPanel.style.display = "block";
  document.addEventListener("keydown", handleEscapeKey);
}

// Drag and drop functionality
let dragged;

document.addEventListener("dragstart", (e) => {
  dragged = e.target;
  e.dataTransfer.setData("text/plain", null);
});

document.addEventListener("dragover", (e) => {
  e.preventDefault();
});

document.addEventListener("dragenter", (e) => {
  if (e.target.classList.contains("draggable")) {
    e.target.classList.add("drag-over");
  }
});

document.addEventListener("dragleave", (e) => {
  if (e.target.classList.contains("draggable")) {
    e.target.classList.remove("drag-over");
  }
});

document.addEventListener("drop", (e) => {
  e.preventDefault();
  if (e.target.classList.contains("draggable")) {
    e.target.classList.remove("drag-over");
  }

  if (e.target !== dragged && e.target.classList.contains("draggable")) {
    const parent = e.target.parentNode;
    const target = e.target;
    const draggedClone = dragged.cloneNode(true);

    parent.replaceChild(draggedClone, target);
    parent.replaceChild(target, dragged);
    dragged = draggedClone;
  }
});

// Settings panel functionality
const showSettingsButton = document.getElementById("showSettings");
const settingsPanel = document.getElementById("settingsPanel");

showSettingsButton.addEventListener("click", function () {
  if (settingsPanel.style.display === "block") {
    hideSettings();
    console.log("settings closed");
  } else {
    showSettings();
    console.log("settings opened");
  }
});

// Hide settings panel initially
hideSettings();
