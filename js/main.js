// main
// js/main.js
import loadHTML from 'js/utils/loadHTML.js';

async function initialize() {
  // Зареждане на HTML компонентите
  await loadHTML('components/board.html', 'board-wrapper');
  await loadHTML('components/controls.html', 'buttons-wrapper');

  // Инициализация на шахматната дъска
  const boardDiv = document.getElementById('board');
  if (boardDiv && window.Chessboard) {
    const board = Chessboard(boardDiv, {
      draggable: true,
      position: 'start'
    });
    window.board = board; // Глобален достъп за други модули

    // След зареждане на бутоните
    const loadBtn = document.getElementById('load-pgn');
    if (loadBtn) {
      loadBtn.addEventListener('click', () => {
        const examplePGN = `
          [Event "Example"]
          [Site "https://vesosoft.netlify.app"]
          [Date "2025.07.29"]
          [Round "-"]
          [White "Вес"]
          [Black "Бот"]
          [Result "1-0"]

          1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5
          7. Bb3 d6 8. c3 O-O 9. h3 Nb8 10. d4 Nbd7 11. Nbd2 Bb7 12. Bc2 Re8
          13. a4 Bf8 14. Bd3 c6 15. b3 d5 16. Qc2 exd4 17. cxd4 dxe4
          18. Nxe4 Nxe4 19. Bxe4 Nf6 20. Bxh7+ Nxh7 21. Rxe8 Qxe8 22. Bf4 Rd8
          23. Re1 Qd7 24. Re5 Bd6 25. Rh5 Nf6 26. Rh4 Bxf4 27. Rxf4 Qd6
          28. Rh4 g6 29. Qc1 Qf8 30. Qg5 Qg7 31. Ne5 Rd5 32. Qe3 Nd7
          33. Ng4 Nf6 34. Qe7 Nxg4 35. Qe8+ Qf8 36. Rh8+ Kxh8 37. Qxf8+ Kh7
          38. Qxf7+ Kh6 39. hxg4 Bc8 40. f3 Rxd4 41. Qf6 Rd1+ 42. Kh2
          1-0
        `.trim();

        if (window.board && window.Chess) {
          const game = new Chess();
          const success = game.load_pgn(examplePGN);
          if (!success) {
            alert('Невалиден PGN!');
            return;
          }

          const moves = game.history();
          let i = 0;

          const interval = setInterval(() => {
            if (i >= moves.length) {
              clearInterval(interval);
              return;
            }
            game.reset();
            for (let j = 0; j <= i; j++) {
              game.move(moves[j]);
            }
            board.position(game.fen());
            i++;
          }, 800);
        } else {
          alert('Не е намерена дъската или библиотеката chess.js!');
        }
      });
    } else {
      console.error('Бутонът "Зареди партията" не е намерен!');
    }
  } else {
    console.error('Не е намерен елемент с ID "board" или липсва Chessboard.');
  }
}

window.addEventListener('DOMContentLoaded', initialize);

/*import { setupLoadButton } from './js/load.js';
import loadHTML from './js/utils/loadHTML.js';

window.addEventListener('DOMContentLoaded', async () => {
  // Зарежда HTML шаблоните
  await loadHTML('components/board.html', 'board-wrapper');
  await loadHTML('components/controls.html', 'buttons-wrapper');

  // След като HTML е зареден, инициализира бутона
  setupLoadButton();
});
*/

/*import { setupLoadButton } from './load.js';
import loadHTML from './js/utils/loadHTML.js';

window.addEventListener('DOMContentLoaded', async () => {
  await loadHTML('components/board.html', 'board-wrapper');
  await loadHTML('components/controls.html', 'buttons-wrapper');
  setupLoadButton();
});
*/
/*import { setupLoadButton } from './load.js';

window.addEventListener('DOMContentLoaded', () => {
  setupLoadButton();
});
import loadHTML from './js/utils/loadHTML.js';

await loadHTML('components/board.html', 'board-wrapper');
await loadHTML('components/controls.html', 'buttons-wrapper'); */
/*	import { initBoard } from './board.js';
import { loadPGN } from './load.js';

window.addEventListener('DOMContentLoaded', () => {
  initBoard();

  const loadBtn = document.getElementById('load-btn');
  if (loadBtn) {
    loadBtn.addEventListener('click', loadPGN);
  }
});
*/
/* let board = null;

document.addEventListener("DOMContentLoaded", function () {
  board = Chessboard('board', {
    draggable: true,
    position: 'start',
    pieceTheme: 'libs/img/chesspieces/wikipedia/{piece}.png',
    showNotation: true
  });

  const flipButton = document.getElementById('flipButton');
  if (flipButton) {
    flipButton.addEventListener('click', () => board.flip());
  }
});
*/
// js/main.js
/*let board = null;

document.addEventListener("DOMContentLoaded", function () {
  board = Chessboard('board', {
    draggable: true,
    position: 'start'
  });

  const flipButton = document.getElementById('flipButton');
  if (flipButton) {
    flipButton.addEventListener('click', () => board.flip());
  }
});
*/
/*export function setupButtons(board) {
  const flipButton = document.getElementById('flipButton');

  if (flipButton) {
    flipButton.addEventListener('click', () => {
      board.flip();
    });
  } else {
    console.warn("Flip button not found.");
  }
}
*/
/*import { createBoard } from './board.js';
import { setupButtons } from './butons.js';

window.addEventListener('DOMContentLoaded', () => {
  createBoard();
  setupButtons();
});
*/
/*import { createControlButtons } from './butons.js';

const board = Chessboard('board', {
  draggable: true,
  position: 'start',
  showNotation: true
});

createControlButtons(board);
*/
/* import { createBoard } from './board.js';
import { setupFlipButton } from './js/butons.js';

createBoard();
setupFlipButton();
// main.js
import { createBoard } from './board.js';
import { setupControls } from './controls.js';
import { setupRotateButton } from './rotate.js';

document.addEventListener('DOMContentLoaded', () => {
  createBoard('board');              // Създава дъската в елемент с ID 'board'
  setupControls();                   // Настройва контролите (бутоните за ходове и др.)
  setupRotateButton('rotateBtn');   // Активира бутона за завъртане на дъската
}) */
