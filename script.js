// Initialize an array to store tasks
let tasks = [];

// Add an event listener to add tasks to the add task btn
document.getElementById("addTaskBtn").addEventListener("click", function () {
  // Storing text value from input box as a variable 'taskInput'
  let taskInput = document.getElementById("taskInput").value;
  // Check if the input is not empty (truthy value)
  if (taskInput) {
    // Add the task to the tasks array
    tasks.push(taskInput);
    // Clear the input field after adding the task
    document.getElementById("taskInput").value = "";
    // Call function to update the task list display
    displayTasks();
  }
});
