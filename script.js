// Step 1: Setup Event Listener for Page Load
document.addEventListener('DOMContentLoaded', function() {

    // Step 2: Select DOM Elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Step 3: Create the addTask Function
    function addTask() {
        // Retrieve and trim the value from the input field
        const taskText = taskInput.value.trim();

        // Check if taskText is not empty
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Step 4: Task Creation and Removal
        // Create a new li element and set its textContent
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create a new button element for removing the task
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.classList.add('remove-btn'); // using classList.add as instructed

        // Assign an onclick event to the remove button that removes the li element from taskList
        removeButton.onclick = function() {
            taskList.removeChild(li);
        };

        // Append the remove button to the li element
        li.appendChild(removeButton);

        // Append the li element to taskList
        taskList.appendChild(li);

        // Clear the task input field
        taskInput.value = "";
    }

    // Step 5: Attach Event Listeners
    // Add an event listener to addButton that calls addTask when clicked
    addButton.addEventListener('click', addTask);

    // Add an event listener to taskInput for the 'keypress' event
    taskInput.addEventListener('keypress', function(event) {
        // Check if event.key is equal to 'Enter' before calling addTask
        if (event.key === 'Enter') {
            addTask();
        }
    });

    // Step 6: Invoke the addTask function on DOMContentLoaded
    addTask();
});
