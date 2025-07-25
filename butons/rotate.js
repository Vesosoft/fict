// butons/rotate.js
import { board } from '../js/board.js';

export function setupRotateButton(buttonId) {
  const rotateBtn = document.getElementById(buttonId);
  if (!rotateBtn || !board) return;

  let isFlipped = false;

  rotateBtn.addEventListener('click', () => {
    isFlipped = !isFlipped;
    board.orientation(isFlipped ? 'black' : 'white');
  });
}
