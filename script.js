'use strict';

// Selecting elements

const taskInput = document.querySelector('.task-input');
const addTaskButton = document.querySelector('.add-tsk-btn');
const toDoItems = document.querySelector('.to-do-items');

// Enter click for new task submission

document.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    addTaskButton.onclick();
    e.preventDefault();
  }
});

// Submit new task

addTaskButton.onclick = function () {
  if (taskInput && taskInput.value) {
    const newTaskInput = taskInput.value;

    // New li
    const newLI = document.createElement('li');
    toDoItems.appendChild(newLI);
    // Checkbox
    const checkbox = document.createElement('div');
    checkbox.classList.add('checkbox');
    checkbox.classList.add('hidden');

    // Check tasks as completed
    checkbox.addEventListener('click', function () {
      if (!checkbox.hasChildNodes()) {
        const checkMark = document.createTextNode('✓');
        checkbox.appendChild(checkMark);
        newTask.style.textDecoration = 'line-through';
        newTask.style.textDecorationThickness = '.15rem';
      } else {
        checkbox.removeChild(checkbox.firstChild);
        newTask.style.textDecoration = 'none';
      }
    });

    // Task text
    const newTask = document.createElement('span');
    const taskText = document.createTextNode(`${newTaskInput}`);
    newTask.appendChild(taskText);
    // Delete button
    const button = document.createElement('button');
    const img = document.createElement('img');
    img.src = 'images/garbage-can.png';
    img.alt = 'Delete';
    button.appendChild(img);
    // Binding it all
    newLI.append(checkbox, newTask, button);

    taskInput.value = '';

    // Delete element
    button.onclick = function () {
      newLI.remove();
    };
  } else {
  }
};
