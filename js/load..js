import { game, updateBoard } from './board.js';

export function loadPGN() {
  const pgnText = document.getElementById('pgn-input')?.value?.trim();

  if (!pgnText) {
    alert('Моля, въведи PGN.');
    return;
  }

  const success = game.load_pgn(pgnText);

  if (!success) {
    alert('Грешка при зареждане на PGN. Проверете синтаксиса.');
    return;
  }

  updateBoard();
}
