export function initFlipButton(board) {
  const flipBtn = document.getElementById('flip')
  if (flipBtn) {
    flipBtn.addEventListener('click', () => {
      board.flip()
    })
  }
}
