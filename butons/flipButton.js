// butons/flipButton.js
export function setupRotateButton(board) {
  const btn = document.getElementById('flipBtn');
  if (btn) {
    btn.addEventListener('click', () => {
      board.flip();
    });
  }
}
