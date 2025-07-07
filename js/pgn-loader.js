import { Chess } from '../libs/chess.min.js';

export function loadPGNFromFile(board) {
  const input = document.getElementById('pgnInput');
  input.addEventListener('change', () => {
    const file = input.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (e) {
      const pgn = e.target.result;
      const chess = new Chess();

      if (!chess.load_pgn(pgn)) {
        alert('Невалиден PGN.');
        return;
      }

      const history = chess.history();
      let moveIndex = 0;

      board.position(chess.fen());

      document.getElementById('nextBtn').onclick = () => {
        if (moveIndex < history.length) {
          chess.move(history[moveIndex]);
          board.position(chess.fen());
          moveIndex++;
        }
      };

      document.getElementById('prevBtn').onclick = () => {
        if (moveIndex > 0) {
          moveIndex--;
          chess.undo();
          board.position(chess.fen());
        }
      };
    };

    reader.readAsText(file);
  });
}
