// js/main.js

import { createBoard } from './board.js';
import { setupRotateButton } from '../butons/rotate.js';
import { setupControls } from './controls.js';

document.addEventListener('DOMContentLoaded', async () => {
  const container = document.getElementById('board-container');

  try {
    const response = await fetch('components/board.html');
    if (!response.ok) throw new Error(`Грешка при зареждане: ${response.status}`);
    const html = await response.text();
    container.innerHTML = html;

    const board = createBoard('board'); // Важно: ID от board.html!
    setupControls(board);
    setupRotateButton();

  } catch (err) {
    container.innerHTML = `<p style="color:red;">${err.message}</p>`;
  }
});
