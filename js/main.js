// main.js
import { createBoard } from './board.js';
import { setupControls } from './controls.js';
import { setupRotateButton } from './rotate.js';

document.addEventListener('DOMContentLoaded', () => {
  createBoard('board');              // Създава дъската в елемент с ID 'board'
  setupControls();                   // Настройва контролите (бутоните за ходове и др.)
  setupRotateButton('rotateBtn');   // Активира бутона за завъртане на дъската
});
