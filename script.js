'use strict';

// Selecting elements

const taskInput = document.querySelector('.task-input');
const addTaskButton = document.querySelector('.add-tsk-btn');
const toDoItems = document.querySelector('.to-do-items');

// Submit new task

addTaskButton.onclick = function () {
  const newTaskInput = taskInput.value;

  // New li
  const newLI = document.createElement('li');
  toDoItems.appendChild(newLI);
  // Checkbox
  const checkbox = document.createElement('div');
  checkbox.classList.add('checkbox');
  const checkMark = document.createTextNode('✓');
  checkbox.appendChild(checkMark);
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
};
