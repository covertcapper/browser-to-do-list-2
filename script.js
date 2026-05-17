'use strict';

// Selecting elements

const taskInput = document.querySelector('.task-input');
const addTaskButton = document.querySelector('.add-tsk-btn');
const taskItem = document.querySelector('.to-do-items li span');

// Submit new task

addTaskButton.onclick = function () {
  const username = taskInput.value;
  taskItem.textContent = `${username}`;
};
