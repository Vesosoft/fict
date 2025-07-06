import { Chess } from '../libs/chess.min.js'; // ако chess.js е модул
// ако не — този ред не е нужен

const board = Chessboard('board', {
  position: 'start',
  draggable: false,
  showNotation: true,
  pieceTheme: 'libs/img/chesspieces/wikipedia/{piece}.png'
});
