// js/utils/loadPGN.js
export function loadPGN(pgnText) {
  const status = document.getElementById("status");

  try {
    window.game = new Chess();
    const success = window.game.load_pgn(pgnText);

    if (!success) {
      status.textContent = "❌ Грешка при зареждане на PGN.";
      status.style.color = "red";
      return;
    }

    const board = window.board || Chessboard("board", {
      position: window.game.fen(),
      draggable: true
    });

    board.position(window.game.fen());
    window.board = board;

    status.textContent = "✅ Партията е заредена успешно!";
    status.style.color = "lime";
  } catch (e) {
    status.textContent = "⚠️ Грешка при обработка на партията.";
    status.style.color = "orange";
    console.error(e);
  }
}
