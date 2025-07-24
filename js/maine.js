// js/maine.js
import { createBoard } from './board.js';
import { setupRotateButton } from '../butons/flipButton.js';

document.addEventListener('DOMContentLoaded', () => {
  const board = initBoard();
  setupRotateButton(board);
});
