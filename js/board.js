// board.js НАЧАЛО

import { Chessboard } from '../libs/chessboard-1.0.0.js';

export const board = Chessboard('board', {
  position: 'start',
  draggable: false,
  showNotation: true,
  pieceTheme: 'libs/img/chesspieces/wikipedia/{piece}.png'
});

// board.js КРАЙ
