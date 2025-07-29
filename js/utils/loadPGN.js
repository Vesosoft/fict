// js/utils/loadPGN.js
export function loadPGN(pgnText) {
  try {
    window.game = new Chess();
    const success = window.game.load_pgn(pgnText);

    if (!success) {
      alert("Грешка при зареждане на PGN.");
      return;
    }

    const board = window.board || Chessboard('board', {
      position: window.game.fen(),
      draggable: true
    });

    board.position(window.game.fen());
    window.board = board;

    const history = window.game.history();
    const msg = `Партията е заредена успешно! Общо ходове: ${history.length}`;
    alert(msg);

    const statusEl = document.getElementById("status");
    if (statusEl) statusEl.textContent = msg;

  } catch (e) {
    alert("Грешка при обработка на партията.");
    console.error(e);
  }
}
