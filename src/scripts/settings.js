document.addEventListener("DOMContentLoaded", function () {
  // Get references to elements
  var timerFontSelect = document.getElementById("timerFontSelect");
  var uiFontSelect = document.getElementById("uiFontSelect");
  var applyTimerFontButton = document.getElementById("applyTimerFont");
  var applyUIFontButton = document.getElementById("applyUIFont");
  var customFontElements = document.querySelectorAll(".custom-font-element");

  // Function to apply font changes and update CSS variables
  function applyFontChanges(selectedFont, cssVariable) {
    console.log(`Selected Font for ${cssVariable}: ${selectedFont}`);

    // Update CSS variable
    document.documentElement.style.setProperty(cssVariable, selectedFont);

    // Apply the selected font to customFontElements
    customFontElements.forEach(function (element) {
      element.style.fontFamily = selectedFont;
    });
  }

  // Add event listeners for applying font changes
  applyTimerFontButton.addEventListener("click", function () {
    var timerSelectedFont = timerFontSelect.value;
    applyFontChanges(timerSelectedFont, "--timer-font");
  });

  applyUIFontButton.addEventListener("click", function () {
    var uiSelectedFont = uiFontSelect.value;
    applyFontChanges(uiSelectedFont, "--ui-font");
  });

  // Function to apply the selected UI Size
  function applyUiSize() {
    const uiSizeInput = document.getElementById("uiSizeInput");
    let uiSize = uiSizeInput.value;

    if (!uiSize.endsWith("px")) {
      uiSize += "px";
      uiSizeInput.value = uiSize;
    }

    document.documentElement.style.setProperty("--ui-size", uiSize);
    console.log("UI Size:", uiSize);
  }

  // Function to apply the selected Timer Size
  function applyTimerSize() {
    const timerSizeInput = document.getElementById("timerSizeInput");
    let timerSize = timerSizeInput.value;

    if (!timerSize.endsWith("px")) {
      timerSize += "px";
      timerSizeInput.value = timerSize;
    }

    document.documentElement.style.setProperty("--timer-size", timerSize);
    console.log("Timer Size:", timerSize);
  }

  // Function to apply the selected Grid Size
  function applyGridSpace() {
    const gridSpaceInput = document.getElementById("gridSpaceInput");
    let gridSpace = gridSpaceInput.value;

    if (!gridSpace.endsWith("px")) {
      gridSpace += "px";
      gridSpaceInput.value = gridSpace;
    }

    document.documentElement.style.setProperty("--grid-size", gridSpace);
    console.log("Grid Size:", gridSpace);
  }

  // Add event listeners to the "Apply" buttons for each setting
  const applyUiSizeButton = document.getElementById("applyUiSize");
  const applyTimerSizeButton = document.getElementById("applyTimerSize");
  const applyGridSpaceButton = document.getElementById("applyGridSpace");

  applyUiSizeButton.addEventListener("click", applyUiSize);
  applyTimerSizeButton.addEventListener("click", applyTimerSize);
  applyGridSpaceButton.addEventListener("click", applyGridSpace);
});
