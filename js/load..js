import { createBoard } from './board.js';

export function setupLoadButton(loadButtonId = 'loadBtn') {
  const button = document.getElementById(loadButtonId);
  if (!button) {
    console.error(`❌ Няма бутон с id='${loadButtonId}'`);
    return;
  }

  button.addEventListener('click', () => {
    createBoard(); // Създава дъската в контейнера с ID "board"
    console.log('✅ Шахматната дъска беше заредена.');
  });
}

/*яimport { createBoard } from './board.js';

export function setupLoadButton(loadButtonId = 'loadBtn') {
  const button = document.getElementById(loadButtonId);
  if (!button) return;

  button.addEventListener('click', () => {
    createBoard(); // Създава дъската в контейнера с ID "board"
    console.log('Шахматната дъска беше заредена.');
  });
}
*/
/*import { game, updateBoard } from './board.js';

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
*/
