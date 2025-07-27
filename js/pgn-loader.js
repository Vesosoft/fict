import { Chess } from '../libs/chess.js';

export function loadPGNFromFile(board) {
  const input = document.getElementById('pgnInput');
  input.addEventListener('change', () => {
    const file = input.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (e) {
      const pgn = e.target.result;
      const game = new Chess();

      if (!game.load_pgn(pgn)) {
        alert('Невалиден PGN файл.');
        return;
      }

      const history = game.history();
      let moveIndex = 0;

      // Покажи началната позиция
      board.position(game.fen());

      // Навигирай с бутоните (ако имаш бутони)
      const nextBtn = document.getElementById('nextBtn');
      const prevBtn = document.getElementById('prevBtn');

      if (nextBtn && prevBtn) {
        nextBtn.onclick = () => {
          if (moveIndex < history.length) {
            game.move(history[moveIndex]);
            board.position(game.fen());
            moveIndex++;
          }
        };

        prevBtn.onclick = () => {
          if (moveIndex > 0) {
            moveIndex--;
            game.undo();
            board.position(game.fen());
          }
        };
      } else {
        // Ако няма бутони – просто пусни автоматично
        const interval = setInterval(() => {
          if (moveIndex >= history.length) {
            clearInterval(interval);
            return;
          }
          game.move(history[moveIndex]);
          board.position(game.fen());
          moveIndex++;
        }, 1000);
      }
    };

    reader.readAsText(file);
  });
}
