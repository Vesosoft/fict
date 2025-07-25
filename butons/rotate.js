// butons/rotate.js
export function setupRotate(board) {
  const rotateBtn = document.getElementById('rotateBtn');
  if (!rotateBtn) return;

  rotateBtn.addEventListener('click', () => {
    const currentOrientation = board.orientation();
    board.orientation(currentOrientation === 'white' ? 'black' : 'white');
  });
}
