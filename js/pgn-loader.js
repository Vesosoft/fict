import { renderBoard } from './board.js';

const chess = new Chess();

let moves = [];
let currentMoveIndex = 0;
let containerIdGlobal = null;

export function loadPGN(pgnText, containerId) {
  if (!chess.load_pgn(pgnText)) {
    console.error('Невалиден PGN!');
    return false;
  }

  containerIdGlobal = containerId;
  moves = chess.history();
  currentMoveIndex = 0;

  // Показваме началната позиция
  renderCurrentPosition();

  return true;
}

function renderCurrentPosition() {
  chess.reset();
  for (let i = 0; i < currentMoveIndex; i++) {
    chess.move(moves[i]);
  }
  renderBoard(containerIdGlobal, chess.fen());
}

export function nextMove() {
  if (currentMoveIndex < moves.length) {
    currentMoveIndex++;
    renderCurrentPosition();
  }
}

export function prevMove() {
  if (currentMoveIndex > 0) {
    currentMoveIndex--;
    renderCurrentPosition();
  }
}

export function resetMoves() {
  currentMoveIndex = 0;
  renderCurrentPosition();
}
