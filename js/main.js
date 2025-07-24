import { createBoard } from './board.js';
import { setupRotateButton } from '../butons/flipButton.js';

document.addEventListener('DOMContentLoaded', () => {
  createBoard('board');
  setupRotateButton();
});
