// Problem #1: Add a new task to the list when the "Add Task" button is clicked.
function addNewTask() {
    const newElement = document.createElement("li");
    newElement.innerText = `Task ${document.getElementById('todo-list').children.length + 1}`;

    const list = document.getElementById("todo-list");
    list.appendChild(newElement);
}

const buttonAddNewTask = document.getElementById("add-task");
buttonAddNewTask.addEventListener("click", addNewTask);

// Problem #2: Remove the last task from the list when the "Remove Task" button is clicked.
function removeRecentTask() {
    const list = document.getElementById("todo-list");
    list.removeChild(list.lastElementChild);
}

const buttonRemoveRecentTask = document.getElementById("remove-task");
buttonRemoveRecentTask.addEventListener("click", removeRecentTask);

// Problem #3: Clear all tasks when the "Clear List" button is clicked.
function removeAllTaskSolutionOne() {
    const list = document.getElementById("todo-list");
    list.innerHTML = '';
}

function removeAllTaskSolutionTwo() {
    const list = document.querySelectorAll("#todo-list li");
    list.forEach(task => task.remove());
}

const buttonRemoveAllTask = document.getElementById("clear-list");
buttonRemoveAllTask.addEventListener("click", removeAllTaskSolutionOne);

// Problem #4 and #5: Toggle a 'completed' class on the list items when clicked.
// Style the completed tasks to have a different background color.
function toggleTaskComplete(event) {
    if (event.target.tagName === "LI") {  
        if (event.target.classList.toggle("completed")) {
            event.target.style.backgroundColor = "aqua";  // Set background to blue
        } else {
            event.target.style.backgroundColor = "";  // Reset background to default
        }
    }
}

const toggleTaskCompleted = document.getElementById("todo-list");
toggleTaskCompleted.addEventListener("click", toggleTaskComplete);