// buttons/flip.js
let boardOrientation = 'white';

function flipBoard() {
  boardOrientation = boardOrientation === 'white' ? 'black' : 'white';
  board.orientation(boardOrientation);
}
