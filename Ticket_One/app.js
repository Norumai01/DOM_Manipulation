// Problem #1: Change the text of the main heading when the "Change Heading Text" button is clicked.
function changeHeading() {
    document.getElementById("main-heading").innerText = "Document say hi.";
}

const buttonHeading = document.getElementById("change-text");
//buttonHeading.onclick = changeHeading;
buttonHeading.addEventListener('click', changeHeading);

// Problem #2: Add a new list item when the "Add List Item" button is clicked.
function addNewList() {
    const newElement = document.createElement("li");
    //const newItem = document.getElementById("item-list").children.length + 1;
    //newElement.textContent = "Item " + newItem;
    // Need to use tick symbol (`) use template literal.
    newElement.innerText = `Item ${document.getElementById('item-list').children.length + 1}`;
    
    const list = document.getElementById("item-list");
    list.appendChild(newElement);
}

const buttonAddItem = document.getElementById("add-item");
buttonAddItem.onclick = addNewList;

// Problem #3: Change the color of all list items to blue when you hover over the "Change Heading Text" button.
function changeAllListColor() {
    const div = document.querySelectorAll("li");
    div.forEach(item => item.style.color = "Blue");
}

buttonHeading.addEventListener("mouseover", changeAllListColor);

// When hover out, check back to narmal color.
function changeAllListColorToNormal() {
    const div = document.querySelectorAll("li");
    div.forEach(item => item.style.color = "Black");
}

buttonHeading.addEventListener("mouseout", changeAllListColorToNormal);

// Problem #4: Remove the last list item when you double-click anywhere on the page.
function removeAllListItem() {
    const div = document.querySelectorAll("li");
    div.forEach(item => item.remove());
}

document.addEventListener("dblclick", removeAllListItem);

// Problem #5: Update the paragraph text when the mouse moves over the heading.
function updateParagraphText() {
    const item = document.querySelector(".description");
    item.innerText = "Updated text.";
}

const hoverOverHeading = document.getElementById("main-heading");
hoverOverHeading.addEventListener("mouseover", updateParagraphText);

function revertParagraphText() {
    const item = document.querySelector(".description");
    item.innerText = "This is a simple paragraph of text.";
}

hoverOverHeading.addEventListener("mouseout", revertParagraphText);