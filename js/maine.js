import { createBoard } from './board.js';
import { setupRotateButton } from '../butons/rotate.js';
import { setupControls } from './controls.js';

document.addEventListener('DOMContentLoaded', () => {
  const boardContainer = document.getElementById('board-container');
  if (boardContainer) {
    const board = createBoard('board-container');
    setupControls(board);
    setupRotateButton();
  }
});
