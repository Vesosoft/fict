// main.js

import { Chess } from '../libs/chess.min.js'
import { initBoard } from './board.js'
import { initControls } from './controls.js'
import { loadPGNFromFile } from './pgn-loader.js'

let game = new Chess()
let board = null

// Основна инициализация
function initApp() {
  board = initBoard(game)
  initControls(game, board)
  loadPGNFromFile(board)
}

// Стартиране на инициализацията при зареждане на страницата
document.addEventListener('DOMContentLoaded', initApp)
