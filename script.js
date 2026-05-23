'use strict';

// Selecting elements

const taskInputArea = document.querySelector('task-input-area');
const taskInput = document.querySelector('.task-input');
const addTaskButton = document.querySelector('.add-tsk-btn');
const toDoItems = document.querySelector('.to-do-items');

// Task array and save function

let tasks = [];

function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Sort list
function renderAllTasks() {
  toDoItems.innerHTML = '';
  tasks.sort((a, b) => a.completed - b.completed);
  tasks.forEach(renderTask);
}

// Builds and appends one list item from a taskObj

function renderTask(taskObj) {
  const newLI = document.createElement('li');
  toDoItems.appendChild(newLI);

  const checkbox = document.createElement('div');
  checkbox.classList.add('checkbox');
  checkbox.classList.add('hidden');

  const newTask = document.createElement('span');
  newTask.appendChild(document.createTextNode(taskObj.text));

  // Restore completed state when loading from storage
  if (taskObj.completed) {
    checkbox.appendChild(document.createTextNode('✓'));
    newTask.style.textDecoration = 'line-through';
    newTask.style.textDecorationThickness = '.15rem';
  }

  checkbox.addEventListener('click', function () {
    if (!checkbox.hasChildNodes()) {
      checkbox.appendChild(document.createTextNode('✓'));
      newTask.style.textDecoration = 'line-through';
      newTask.style.textDecorationThickness = '.15rem';
    } else {
      checkbox.removeChild(checkbox.firstChild);
      newTask.style.textDecoration = 'none';
    }
    taskObj.completed = !taskObj.completed;
    renderAllTasks();
    saveTasks();
  });

  const button = document.createElement('button');
  const img = document.createElement('img');
  img.src = 'images/garbage-can.png';
  img.alt = 'Delete';
  button.appendChild(img);

  newLI.append(checkbox, newTask, button);

  button.onclick = function () {
    newLI.remove();
    tasks.splice(tasks.indexOf(taskObj), 1);
    saveTasks();
  };
  // Edit tasks
  newTask.addEventListener('dblclick', function () {
    const editInput = document.createElement('input');
    editInput.value = taskObj.text;
    newLI.replaceChild(editInput, newTask); // Swaps out the span
    editInput.focus(); // Puts cursor into the field

    function finishEdit() {
      if (editInput.value.trim()) {
        // checks that the field isn't blank
        taskObj.text = editInput.value.trim();
        newTask.firstChild.nodeValue = taskObj.text;
        saveTasks();
      }
      newLI.replaceChild(newTask, editInput);
    }

    editInput.addEventListener('blur', finishEdit);

    editInput.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') {
        e.stopPropagation();
        finishEdit();
      }
    });
  });
}

// Enter key for task submission

document.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    addTaskButton.onclick();
    e.preventDefault();
  }
});

// Submit new task

addTaskButton.onclick = function () {
  if (taskInput && taskInput.value) {
    const taskObj = { text: taskInput.value, completed: false };
    tasks.push(taskObj);
    saveTasks();
    renderTask(taskObj);
    taskInput.value = '';
  }
};

// Load saved tasks on startup

const saved = localStorage.getItem('tasks');
if (saved) {
  tasks = JSON.parse(saved);
  tasks.forEach(renderTask);
}
