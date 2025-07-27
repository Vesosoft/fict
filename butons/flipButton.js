// js/flipButton.js
export function createFlipButton(board) {
  const buton = document.createElement('buton');
  buton.textContent = '⟳';
  buton.title = 'Завърти дъската';
  buton.id = 'flipButton';
  buton.className = 'control-button';

  buton.addEventListener('click', () => {
    board.flip();
  });

  return buton;
}
