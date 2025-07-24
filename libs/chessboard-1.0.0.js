// chessboard-1.0.0.js
(function(global) {
  const defaultConfig = {
    draggable: true,
    position: 'start',
    pieceTheme: 'img/chesspieces/wikipedia/{piece}.png',
    orientation: 'white',
    showNotation: true
  };

  function deepMerge(target, source) {
    for (let key in source) {
      if (source[key] && source[key].constructor === Object) {
        if (!target[key]) target[key] = {};
        deepMerge(target[key], source[key]);
      } else {
        target[key] = source[key];
      }
    }
    return target;
  }

  function createBoard(containerEl, config) {
    const cfg = deepMerge(deepMerge({}, defaultConfig), config || {});
    const board = document.createElement('div');
    board.className = 'chessboard';

    const squares = {};
    const files = ['a','b','c','d','e','f','g','h'];
    const ranks = ['1','2','3','4','5','6','7','8'];

    const orientation = cfg.orientation === 'black' ? -1 : 1;
    const rows = orientation === 1 ? ranks.slice().reverse() : ranks;
    const cols = orientation === 1 ? files : files.slice().reverse();

    for (let r = 0; r < 8; r++) {
      for (let f = 0; f < 8; f++) {
        const square = document.createElement('div');
        const color = (r + f) % 2 === 0 ? 'light' : 'dark';
        square.className = `square ${color}`;
        const file = cols[f];
        const rank = rows[r];
        const squareId = file + rank;
        square.setAttribute('data-square', squareId);

        // Notation
        if (cfg.showNotation) {
          if (r === 7) {
            const notation = document.createElement('div');
            notation.className = 'notation file';
            notation.textContent = file;
            square.appendChild(notation);
          }
          if (f === 0) {
            const notation = document.createElement('div');
            notation.className = 'notation rank';
            notation.textContent = rank;
            square.appendChild(notation);
          }
        }

        board.appendChild(square);
        squares[squareId] = square;
      }
    }

    containerEl.innerHTML = '';
    containerEl.appendChild(board);

    return {
      setPiece: function(square, piece) {
        const el = squares[square];
        if (!el) return;
        el.innerHTML = ''; // clear
        if (piece) {
          const img = document.createElement('img');
          img.src = cfg.pieceTheme.replace('{piece}', piece);
          img.className = 'piece';
          if (cfg.draggable) img.draggable = true;
          el.appendChild(img);
        }
      },
      clear: function() {
        for (let sq in squares) squares[sq].innerHTML = '';
      },
      orientation: cfg.orientation
    };
  }

  global.Chessboard = function(containerElOrId, config) {
    const el = typeof containerElOrId === 'string'
      ? document.getElementById(containerElOrId)
      : containerElOrId;
    return createBoard(el, config);
  };
})(window);
