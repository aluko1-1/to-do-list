function addTask() {
  let taskInput = document.getElementById("taskInput");
  let taskList = document.getElementById("taskList");

  // Create a new list item
  let li = document.createElement("li");
  let taskText = document.createTextNode(taskInput.value);
  li.appendChild(taskText);

  // Clear the input field
  taskInput.value = "";
  // // Add a close button to the list item
  let deleteButton = document.createElement("button");
  deleteButton.innerHTML = "Delete";
  deleteButton.onclick = function () {
    let listItem = this.parentElement;
    taskList.removeChild(listItem);
  };
  li.appendChild(deleteButton);

  // Add the new list item to the task list
  taskList.appendChild(li);
}
