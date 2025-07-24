// js/board.js
import { Chessboard } from '../libs/chessboard-1.0.0.js';

export function createBoard(containerId) {
  const boardElement = document.getElementById(containerId);
  if (!boardElement) {
    console.error(`Не е намерен елемент с ID '${containerId}'`);
    return;
  }

  const board = new Chessboard(boardElement, {
    position: 'start',
    coordinates: true,
    responsive: true,
    draggable: true, // ако искаш да местиш фигури с мишката
  });

  window.board = board; // достъпен в конзолата за тест
}
