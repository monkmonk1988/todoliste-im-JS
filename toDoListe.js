const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

addTaskButton.addEventListener("click", function () {
  if (taskInput.value === "") {
    alert("bitte eine aufgabe eingeben");
    return;
  } else {
    const taskItem = document.createElement("li");
    const taskText = document.createElement("span");
    taskText.textContent = taskInput.value;
    taskItem.appendChild(taskText);
    const deleteButton = document.createElement("button");
    const readyButton = document.createElement("button");
    deleteButton.textContent = "löschen";
    deleteButton.classList.add("loeschen");
    readyButton.textContent = "erledigt";
    deleteButton.addEventListener("click", function () {
      taskList.removeChild(taskItem);
    });
    readyButton.addEventListener("click", function () {
      if (taskText.style.textDecoration === "line-through") {
        taskText.style.textDecoration = "none";
      } else {
        taskText.style.textDecoration = "line-through";
      }
    });
    taskItem.appendChild(deleteButton);
    taskItem.appendChild(readyButton);
    taskList.appendChild(taskItem);
    taskInput.value = "";
  }
});
