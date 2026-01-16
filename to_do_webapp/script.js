const taskInput = document.getElementById("taskInput");
const pendingTasks = document.getElementById("pendingTasks");
const completedTasks = document.getElementById("completedTasks");

function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === "") return;

  const li = document.createElement("li");
  li.innerHTML = `
    <span>${taskText}</span>
    <div>
      <button onclick="completeTask(this)">✓</button>
      <button onclick="deleteTask(this)">X</button>
    </div>
  `;

  pendingTasks.appendChild(li);
  taskInput.value = "";
}

function completeTask(button) {
  const task = button.closest("li");
  task.querySelector("div").innerHTML = `
    <button onclick="deleteTask(this)">X</button>
  `;
  completedTasks.appendChild(task);
}

function deleteTask(button) {
  const task = button.closest("li");
  task.remove();
}
