export function setupRotateButton(board) {
  const button = document.getElementById('flipBtn')
  if (button) {
    button.addEventListener('click', () => {
      board.flip()
    })
  }
}
