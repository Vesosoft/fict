import { createBoard } from './board.js';
import { setupButtons } from './buttons.js';

window.addEventListener('DOMContentLoaded', () => {
  createBoard();
  setupButtons();
});

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
