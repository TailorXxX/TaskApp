const taskInput = document.getElementById('task');
const addTaskButton = document.getElementById('add-task');
const tasksList = document.getElementById('tasks-list');

function buttonClick() {
  const taskElement = `
  <li>${taskInput.value}</li>
  `;
  tasksList.insertAdjacentHTML('beforeend', taskElement);
}

addTaskButton.addEventListener('click', () => buttonClick());
