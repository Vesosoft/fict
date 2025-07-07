// js/pgn-loader.js
import { board } from './board.js';

const chess = new Chess();

document.getElementById('pgnInput').addEventListener('change', function (event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function (e) {
    const pgn = e.target.result;
    const loaded = chess.load_pgn(pgn);

    if (!loaded) {
      alert('Невалиден PGN файл.');
      return;
    }

    const moves = chess.history();
    chess.reset();
    board.position(chess.fen());

    let i = 0;
    const nextMove = () => {
      if (i >= moves.length) return;
      chess.move(moves[i]);
      board.position(chess.fen());
      i++;
      setTimeout(nextMove, 700); // автоматично проиграване
    };

    nextMove();
  };

  reader.readAsText(file);
});
