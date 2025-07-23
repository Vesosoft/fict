// js/maine.js

import { Chess } from '../libs/chess.min.js'
import { initBoard } from './board.js'
import { initControls } from './controls.js'

// Инициализация на обекта за игра
let game = new Chess()
let board = null

// Главна функция за инициализация
function initApp() {
  board = initBoard(game)
  initControls(game, board)
}

// Стартиране при зареждане на страницата
document.addEventListener('DOMContentLoaded', initApp)
