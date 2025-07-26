import { board } from './board.js';

export function setupFlipButton() {
  const flipBtn = document.getElementById('flipBtn');
  flipBtn.addEventListener('click', () => {
    board.flip();
  });
}
