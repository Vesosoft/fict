// js/flipButton.js
export function createFlipButton(board) {
  const button = document.createElement('button');
  button.textContent = '⟳';
  button.title = 'Завърти дъската';
  button.id = 'flipButton';
  button.className = 'control-button';

  button.addEventListener('click', () => {
    board.flip();
  });

  return button;
}
