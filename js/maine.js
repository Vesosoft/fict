import { createBoard } from './board.js';
import { setupRotateButton } from '../butons/rotate.js';

document.addEventListener('DOMContentLoaded', () => {
  createBoard('board');
  setupRotateButton();
});
