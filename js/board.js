// js/board.js
export function initBoard() {
  return Chessboard('board', {
    position: 'start',
    draggable: true,
    pieceTheme: '../libs/img/chesspieces/wikipedia/{piece}.png',
    showNotation: true
  });
}
