// js/main.js
let board = null;

document.addEventListener("DOMContentLoaded", function () {
  board = Chessboard('board', {
    draggable: true,
    position: 'start'
  });

  const flipButton = document.getElementById('flipButton');
  if (flipButton) {
    flipButton.addEventListener('click', () => board.flip());
  }
});

/*export function setupButtons(board) {
  const flipButton = document.getElementById('flipButton');

  if (flipButton) {
    flipButton.addEventListener('click', () => {
      board.flip();
    });
  } else {
    console.warn("Flip button not found.");
  }
}
*/
/*import { createBoard } from './board.js';
import { setupButtons } from './butons.js';

window.addEventListener('DOMContentLoaded', () => {
  createBoard();
  setupButtons();
});
*/
/*import { createControlButtons } from './butons.js';

const board = Chessboard('board', {
  draggable: true,
  position: 'start',
  showNotation: true
});

createControlButtons(board);
*/
/* import { createBoard } from './board.js';
import { setupFlipButton } from './js/Buttons.js';

createBoard();
setupFlipButton();
// main.js
import { createBoard } from './board.js';
import { setupControls } from './controls.js';
import { setupRotateButton } from './rotate.js';

document.addEventListener('DOMContentLoaded', () => {
  createBoard('board');              // Създава дъската в елемент с ID 'board'
  setupControls();                   // Настройва контролите (бутоните за ходове и др.)
  setupRotateButton('rotateBtn');   // Активира бутона за завъртане на дъската
}) */
