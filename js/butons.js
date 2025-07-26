export function createControlButtons(board) {
  const container = document.getElementById('controls');

  const flipBtn = document.createElement('button');
  flipBtn.textContent = 'Завърти дъската';
  flipBtn.onclick = () => board.flip();
  container.appendChild(flipBtn);
}

/*import { setupAuto } from '../butons/auto.js';
import { setupClear } from '../butons/clear.js';
import { setupLoad } from '../butons/load.js';
import { setupNext } from '../butons/next.js';
import { setupPrev } from '../butons/prev.js';
import { setupSave } from '../butons/save.js';
import { setupFlip } from '../butons/flipButton.js'; // 🔥 Добавено това

export function initButtons(game, board) {
  setupAuto(game, board);
  setupClear(game, board);
  setupLoad(game, board);
  setupNext(game, board);
  setupPrev(game, board);
  setupSave(game, board);
  setupFlip(board); // 🔥 Добавено това
}
