import { loadPGNFromFile } from './pgn-loader.js';

const board = Chessboard('board', {
  position: 'start',
  pieceTheme: 'libs/img/chesspieces/wikipedia/{piece}.png',
  draggable: false,
  showNotation: true
});

loadPGNFromFile(board);
