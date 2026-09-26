const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");
const inputMessage = document.getElementById("inputMessage");
const emptyState = document.getElementById("emptyState");


function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        inputMessage.textContent = "Please enter a task.";
        return;
    }

    inputMessage.textContent = "";

    const taskItem = document.createElement("div");
    taskItem.classList.add("task-item");

    const taskTextElement = document.createElement("span");
    taskTextElement.textContent = taskText;

    taskItem.appendChild(taskTextElement);
    taskList.appendChild(taskItem);

    taskInput.value = "";

    emptyState.style.display = "none";

    updateTaskCount();
}


function updateTaskCount() {
    const tasks = document.querySelectorAll(".task-item");
    taskCount.textContent = tasks.length;
}


addTaskButton.addEventListener("click", addTask);


taskInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});