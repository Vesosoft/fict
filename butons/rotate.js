// grotate.js
// js/rotate.js

export function addRotateButton(board) {
  const button = document.createElement('button');
  button.textContent = '🔁 Завърти дъската';
  button.id = 'rotateBtn';
  button.style.margin = '10px';
  button.style.padding = '6px 12px';
  button.style.fontSize = '16px';

  let orientation = 'white';

  button.addEventListener('click', () => {
    orientation = orientation === 'white' ? 'black' : 'white';
    board.orientation(orientation);
  });

  document.getElementById('controls').appendChild(button);
}
