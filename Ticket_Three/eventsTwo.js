// Problem #1: Hide the heading when the "Hide Heading" button is clicked.
// Problem #2: Show the heading when the "Show Heading" button is clicked.
const hideHeadingButton = document.getElementById("hide-btn");
hideHeadingButton.addEventListener('click', () => {
    const element = document.querySelector("h1")
    element.style.display = 'none';
});

const showHeadingButton = document.getElementById("show-btn");
showHeadingButton.addEventListener('click', () => {
    const element = document.querySelector("h1")
    element.style.display = 'block';
});

// Problem #3: Change the color of the heading when the "Change Heading Color" button is clicked.
const changeColorButton = document.getElementById("change-color-btn");
changeColorButton.addEventListener('click', () => {
    const element = document.querySelector("h2");
    if (element.style.color === "blue") {
        element.style.color = "black";
    }
    else {
        element.style.color = "blue";
    }  
});

// Problem #4: Toggle the visibility of the heading with a single button (combine hide and show functionality).
const showHideButton = document.getElementById("show-hide-btn");
showHideButton.addEventListener('click', () => {
    const element = document.querySelector("h2");
    (element.style.display === "none") ? element.style.display = "block" : element.style.display = "none";
});

// Problem #5: Automatically change the heading color every second (use setInterval).
function cycleHeadidngColor() {
    const element = document.querySelector("h2");
    const colors = ['red', 'blue', 'green', 'purple', 'orange'];
    let colorIndex = 0;

    setInterval(() => {
        element.style.color = colors[colorIndex];
        colorIndex = (colorIndex + 1) % colors.length;
    }, 1000);
}

cycleHeadidngColor();

