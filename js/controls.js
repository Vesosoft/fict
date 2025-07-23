// js/controls.js

export function setupControls(board) {
  const input = document.getElementById('pgnInput');
  input.addEventListener('change', function (event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (e) {
      const pgn = e.target.result;
      const game = new Chess();
      if (game.load_pgn(pgn)) {
        board.position(game.fen());
        alert('Партията е заредена успешно!');
      } else {
        alert('Невалиден PGN файл!');
      }
    };
    reader.readAsText(file);
  });
}
