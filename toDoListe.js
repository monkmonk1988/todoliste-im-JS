const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

addTaskButton.addEventListener("click", function () {
  if (taskInput.value === "") {
    alert("bitte eine aufgabe eingeben");
    return;
  } else {
    const taskItem = document.createElement("li");
    taskItem.textContent = taskInput.value;
    const deleteButton = document.createElement("button");
    const readyButton = document.createElement("button");
    deleteButton.textContent = "löschen";
    readyButton.textContent = "erledigt";
    deleteButton.addEventListener("click", function () {
      taskList.removeChild(taskItem);
    });
    readyButton.addEventListener("click", function () {
      if (taskItem.style.textDecoration === "line-through") {
        taskItem.style.textDecoration = "none";
      } else {
        taskItem.style.textDecoration = "line-through";
      }
    });
    taskItem.appendChild(deleteButton);
    taskItem.appendChild(readyButton);
    taskList.appendChild(taskItem);
    taskInput.value = "";
  }
});
