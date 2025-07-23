// Основен файл за инициализация
import { loadPGNFromFile } from './pgn-loader.js';

const board = Chessboard('board', {
  position: 'start',
  pieceTheme: 'libs/img/chesspieces/wikipedia/{piece}.png',
  draggable: true,
  showNotation: true
});

loadPGNFromFile(board);
import { Chess } from '../libs/chess.min.js'
import { initBoard } from './board.js'
import { initControls } from './controls.js'

let game = new Chess()
let board = null

// Инициализация на цялото приложение
function initApp() {
  board = initBoard(game)
  initControls(game, board)
}

// Зареждане при отваряне на страницата
document.addEventListener('DOMContentLoaded', initApp)
