
// js/main.js

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
async function loadBoard() {
  const container = document.getElementById('board-container');

  try {
    const response = await fetch('components/board.html');
    if (!response.ok) throw new Error(`Грешка при зареждане: ${response.status}`);
    const html = await response.text();
    container.innerHTML = html;

    // след зареждане можеш да активираш JS за дъската, ако има такъв
    import('./board.js').then(module => {
      module.initBoard(); // ако имаш такава функция
    }).catch(console.error);

  } catch (err) {
    container.innerHTML = `<p style="color:red;">${err.message}</p>`;
  }
}

loadBoard();
