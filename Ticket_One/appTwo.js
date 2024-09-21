// Problem #1: Change the text of the main heading when the "Change Heading Text" button is clicked.
const buttonHeading = document.getElementById("change-text");
const mainheading = document.getElementById("main-heading");
const originalText = mainheading.innerText;
buttonHeading.addEventListener('click', () => {
    if (mainheading.innerText === originalText) {
        mainheading.innerText = "Document say hi.";
    }
    else {
        mainheading.innerText = originalText;
    }
});

// Problem #2: Add a new list item when the "Add List Item" button is clicked.
const buttonAddItem = document.getElementById("add-item");
buttonAddItem.addEventListener('click', () => {
    const newElement = document.createElement("li");
    newElement.innerText = `Item ${document.getElementById('item-list').children.length + 1}`;

    const list = document.getElementById("item-list");
    list.appendChild(newElement);
});

// Problem #3: Change the color of all list items to blue when you hover over the "Change Heading Text" button.
const buttonHeadingColor = document.getElementById("change-text");
buttonHeadingColor.addEventListener("mouseover", () => {
    const div = document.querySelectorAll("li");
    div.forEach(item => item.style.color = "Blue");
});

// When hover out, check back to narmal color.
buttonHeading.addEventListener("mouseout", () => {
    const div = document.querySelectorAll("li");
    div.forEach(item => item.style.color = "Black");
});

// Problem #4: Remove the last list item when you double-click anywhere on the page.
document.addEventListener("dblclick", () => {
    const list = document.getElementById("item-list");
    list.removeChild(list.lastElementChild);
});

// Problem #5: Update the paragraph text when the mouse moves over the heading.
const hoverOverHeading = document.getElementById("main-heading");
hoverOverHeading.addEventListener("mouseover", () => {
    const item = document.querySelector(".description");
    item.innerText = "Updated text.";
});

hoverOverHeading.addEventListener("mouseout", () => {
    const item = document.querySelector(".description");
    item.innerText = "This is a simple paragraph of text";
});