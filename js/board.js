export let board = null;

export function createBoard() {
  board = Chessboard('board', {
    pieceTheme: 'libs/img/chesspieces/wikipedia/{piece}.png',
    position: 'start',
    showNotation: true
  });
}

/*// js/board.js

// Глобална променлива за дъската
let board = null;

// Функция за създаване и връщане на дъската
export function createBoard(elementId) {
  if (board) return board; // ако вече е създадена, не я създаваме пак

  board = Chessboard(elementId, {
    draggable: true,
    position: 'start',
    // pieceTheme: 'img/chesspieces/wikipedia/{piece}.png',
pieceTheme: 'https://vesosoft.github.io/fict/libs/img/chesspieces/wikipedia/{piece}.png',
    showNotation: true,
  });

  return board;
}

// Връщане на текущата дъска (ако е нужно някъде другаде)
export function getBoard() {
  return board;
} */
