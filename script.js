// Initialize an array to store tasks
let tasks = [];

// Add an event listener to add tasks to the add task btn
document.getElementById("addTaskBtn").addEventListener("click", addTask);

// Add event listener for "Enter" key to add task
document
  .getElementById("taskInput")
  .addEventListener("keydown", function (event) {
    // If "Enter" is pressed, add the task
    if (event.key === "Enter") addTask();
  });

// Function to add a task
function addTask() {
  // Storing text value from input box as a variable 'taskInput'
  let taskInput = document.getElementById("taskInput").value;

  // Check if the input is not empty (truthy value)
  if (taskInput) {
    // Add the task to the tasks array with its initial completion status
    tasks.push({ text: taskInput, completed: false });

    // Clear the input field after adding the task
    document.getElementById("taskInput").value = "";

    // Call function to update the task list display
    displayTasks();
  }
}

// Function to display the tasks from tasks array in the UL
function displayTasks() {
  // Select the unordered list (taskList) in the HTML
  let taskList = document.getElementById("taskList");

  // Clear the existing task list before updating it
  taskList.innerHTML = "";

  // Loop through each task in the array and create a list item
  tasks.forEach((task, index) => {
    // Create a new <li> element for each task
    let li = document.createElement("li");

    // Add Bootstrap classes for styling
    li.classList.add(
      "list-group-item",
      "d-flex",
      "justify-content-between",
      "align-items-center"
    );

    // Set the inner HTML of the <li> element with task text and check mark for completion
    li.innerHTML = `<span>${task.text}</span> <button class='btn btn-dark btn-sm complete-btn' data-index='${index}'>√</button>`;

    // Apply completed class if task is marked as done
    if (task.completed) {
      li.classList.add("completed");
    }

    // Toggle completion when clicking the check mark button
    li.querySelector(".complete-btn").addEventListener("click", function () {
      // Update task completion state in the array
      task.completed = !task.completed;

      // Apply or remove the completed style
      li.classList.toggle("completed");
    });

    // Append the new task to the task list
    taskList.appendChild(li);
  });
  updateTaskCounter();
}

// Function to update task counter
function updateTaskCounter() {
  document.getElementById(
    "taskCounter"
  ).textContent = `Total Tasks: ${tasks.length}`;
}

// Event listener for the "Clear All Tasks" button
document.getElementById("clearTaskBtn").addEventListener("click", function () {
  // Empty the tasks array to remove all tasks
  tasks = [];

  // Call the function to update the task list display
  displayTasks();
});
