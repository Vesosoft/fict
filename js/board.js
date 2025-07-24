// js/board.js
let board = null;

export function createBoard(containerId) {
  const config = {
    draggable: true,
    position: 'start',
    showNotation: true
  };

  board = Chessboard(containerId, config);
}

export function flipBoard() {
  if (board) board.flip();
}
