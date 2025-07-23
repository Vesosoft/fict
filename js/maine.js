// js/main.js

import { Chess } from '../libs/chess.min.js'
import { board } from './board.js'
import { initControls } from './controls.js'
import { loadPGNFromFile } from './pgn-loader.js'

let game = new Chess()

// Функция за инициализация на приложението
function initApp() {
  initControls(game, board)
  loadPGNFromFile(game, board)
}

// Стартиране при зареждане на страницата
document.addEventListener('DOMContentLoaded', initApp)
