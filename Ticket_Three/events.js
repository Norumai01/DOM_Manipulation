// Problem #1: Hide the heading when the "Hide Heading" button is clicked.
// Problem #2: Show the heading when the "Show Heading" button is clicked.
function hideHeading() {
    const element = document.querySelector("h1")
    element.style.display = 'none';
}

function showHeading() {
    const element = document.querySelector("h1")
    element.style.display = 'block';
}

const hideHeadingButton = document.getElementById("hide-btn");
hideHeadingButton.addEventListener('click', hideHeading);

const showHeadingButton = document.getElementById("show-btn");
showHeadingButton.addEventListener('click', showHeading);

// Problem #3: Change the color of the heading when the "Change Heading Color" button is clicked.
function changeHeadingColor() {
    const element = document.querySelector("h2");
    if (element.style.color === "blue") {
        element.style.color = "black";
    }
    else {
        element.style.color = "blue";
    }   
}

const changeColorButton = document.getElementById("change-color-btn");
changeColorButton.addEventListener('click', changeHeadingColor);

// Problem #4: Toggle the visibility of the heading with a single button (combine hide and show functionality).
function showHideHeading() {
    const element = document.querySelector("h2");
    (element.style.display === "none") ? element.style.display = "block" : element.style.display = "none";
}

const showHideButton = document.getElementById("show-hide-btn");
showHideButton.addEventListener('click', showHideHeading);

// Problem #5: Automatically change the heading color every second (use setInterval).
function cycleHeadidngColor() {
    // Maybe use the array in the script instead of function.
    let colors = ["red", "blue", "orange", "purple", "black"];
    const element = document.querySelector("h2");
    for (color of colors) {
        element.style.color = color;
    }
}

