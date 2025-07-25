// Създаване на празна шахматна дъска с координати и SVG фигури
export function createBoard(containerId = 'board') {
  const container = document.getElementById(containerId);
  container.innerHTML = ''; // Изчистване

  const board = document.createElement('div');
  board.className = 'board';
  container.appendChild(board);

  const files = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

  for (let rank = 8; rank >= 1; rank--) {
    for (let file = 0; file < 8; file++) {
      const square = document.createElement('div');
      square.className = `square ${(file + rank) % 2 === 0 ? 'light' : 'dark'}`;
      square.dataset.square = files[file] + rank;
      board.appendChild(square);
    }
  }

  // Добавяне на координати
  files.forEach((file, i) => {
    const label = document.createElement('div');
    label.className = 'coord file';
    label.textContent = file;
    label.style.left = `${i * 12.5}%`;
    container.appendChild(label);
  });

  for (let rank = 8; rank >= 1; rank--) {
    const label = document.createElement('div');
    label.className = 'coord rank';
    label.textContent = rank;
    label.style.top = `${(8 - rank) * 12.5}%`;
    container.appendChild(label);
  }
}
/*import { Chessboard } from "../libs/chessboard-1.0.0.js";

export let board = null;

export function initBoard(containerId = "board") {
  board = Chessboard(containerId, {
    position: "start",
    showNotation: true,
    pieceTheme: "../libs/img/chesspieces/wikipedia/{piece}.png"
  });
}

*/
/*let board = null;

export function createBoard() {
  const boardElement = document.getElementById('board');
  if (!boardElement) {
    console.error("Няма елемент с ID 'board'");
    return;
  }

  board = Chessboard(boardElement, {
    draggable: true,
    position: 'start',
    showNotation: true,
    pieceTheme: 'img/chesspieces/wikipedia/{piece}.png'
  });

  window.chessboard = board;
}

export function getBoard() {
  return board;
}

*/

/*export function createBoard() {
  const boardElement = document.getElementById('board');
  if (!boardElement) {
    console.error("Board container not found!");
    return;
  }

  const board = Chessboard(boardElement, {
    position: 'start',
    draggable: true,
    pieceTheme: 'img/chesspieces/wikipedia/{piece}.png',
    showNotation: true
  });

  window.chessboard = board;
}
*/
/*export let board = null;

export function createBoard() {
  board = Chessboard('board', {
    pieceTheme: 'libs/img/chesspieces/wikipedia/{piece}.png',
    position: 'start',
    showNotation: true
  });
}

/ js/board.js
"/
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
