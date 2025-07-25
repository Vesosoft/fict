// grotate.js
  import { flipBoard } from '../js/board.js';

export function setupRotateButton(buttonId) {
  const button = document.getElementById(buttonId);
  if (button) {
    button.addEventListener('click', () => {
      flipBoard();
    });
  }
}
