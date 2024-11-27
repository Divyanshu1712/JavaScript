// Select DOM elements
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

// Function to add a new task
function addTask() {
    const taskText = taskInput.value;

    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    // Create a new list item
    const listItem = document.createElement('li');
    listItem.textContent = taskText;

    // Create a delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'hat du';
    deleteButton.onclick = function () {
        taskList.removeChild(listItem); // Remove the task from the list
    };

    listItem.appendChild(deleteButton); // Add delete button to the list item
    taskList.appendChild(listItem); // Add list item to the task list

    taskInput.value = ''; // Clear the input field
}

// Event listener for the Add Task button
addTaskButton.addEventListener('click', addTask);


