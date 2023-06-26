let taskList = store.get().taskList;
let id = store.get().id;

const elements = {
  taskList: document.querySelector('.task-list'),
  newTask: {
    textInput: document.querySelector('.new-task__input'),
    form: document.querySelector('.new-task')
  },
  document: document
}

function getTaskTemplateHtml(task) {
  return ` 
  <div class="task" data-id="${task.id}"> 
    <input class="task__text" value="${task.text}" disabled> 
    <div class="task__actions">
      <button class="task__cancel-edit">cancel</button> 
      <button class="task__update">update</button> 
    </div>
    <button class="task__delete">x</button> 
  </div> 
  `;
}

function render() {
  let htmlFieldString = '';
  for (let i = 0; i < taskList.length; i++) {
    htmlFieldString += getTaskTemplateHtml(taskList[i]);
  }
  document.querySelector('.task-list').innerHTML = htmlFieldString;
}

function onCreateTask(event) {
  event.preventDefault();
  const taskText = elements.newTask.textInput.value;
  const newTask = {
    text: taskText,
    id: String(id++)
  };
  taskList.push(newTask);
  store.update(taskList, id);
  elements.newTask.textInput.value = '';
  render();
}

function onDeleteTask(event) {
  let isDeleteButton = event.target.classList.contains('task__delete');
  if (!isDeleteButton) {
    return;
  }
  const taskId = event.target.parentElement.dataset.id;
  taskList = taskList.filter(task => task.id !== taskId);
  store.update(taskList);
  render();
}

function setEditableTask(event) {
  let isTextInput = event.target.classList.contains('task__text');
  if (!isTextInput) {
    return;
  }
  const inputElement = event.target;
  inputElement.parentElement.classList.add('task--editing');

  if (inputElement.disabled) {
    inputElement.removeAttribute('disabled');
  }
}

function disableTask(event) {
  let isCancelEdit = event.target.classList.contains('task__cancel-edit');
  if (!isCancelEdit) {
    return;
  }
  const inputElement = event.target.parentElement.parentElement.querySelector('.task__text');

  if (!inputElement.disabled) {
    inputElement.setAttribute('disabled', '');
    inputElement.parentElement.classList.remove('task--editing');
  }
}

function onUpdateTask(event) {
  let isUpdateTask = event.target.classList.contains('task__update');
  if (!isUpdateTask) {
    return;
  }
  // задание
  // надо одновить данные в массиве
  // вызвать render()
  console.warn('Надо выполнить задание выше');
}

function setSubscriptions() {
  elements.newTask.form.addEventListener('submit', onCreateTask);
  elements.taskList.addEventListener('click', onDeleteTask);
  elements.taskList.addEventListener('click', setEditableTask);
  elements.taskList.addEventListener('click', disableTask);
  elements.taskList.addEventListener('click', onUpdateTask);
}

function main() {
  setSubscriptions();
  render();
}

main();
