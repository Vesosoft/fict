// js/chessboard-1.0.0.js
export function Chessboard(containerEl, config = {}) {
  const boardEl = document.createElement('div')
  boardEl.className = 'chessboard'
  containerEl.appendChild(boardEl)

  const orientation = config.orientation === 'black' ? 'black' : 'white'
  let currentPosition = config.position || {}

  const files = ['a','b','c','d','e','f','g','h']
  const ranks = ['8','7','6','5','4','3','2','1']

  const createSquare = (file, rank) => {
    const square = document.createElement('div')
    square.className = `square ${(file.charCodeAt(0)+rank)%2 === 0 ? 'light' : 'dark'}`
    square.dataset.square = file + rank
    return square
  }

  const setPieceImage = (square, piece) => {
    if (!piece) return
    const img = document.createElement('img')
    img.src = `img/chesspieces/wikipedia/${piece}.png`
    img.className = 'piece'
    square.appendChild(img)
  }

  const drawBoard = () => {
    boardEl.innerHTML = ''
    const f = orientation === 'white' ? files : [...files].reverse()
    const r = orientation === 'white' ? [...ranks].reverse() : ranks

    for (const rank of r) {
      for (const file of f) {
        const square = createSquare(file, rank)
        const key = file + rank
        if (currentPosition[key]) setPieceImage(square, currentPosition[key])
        boardEl.appendChild(square)
      }
    }
  }

  drawBoard()

  return {
    position(pos) {
      if (typeof pos === 'string') {
        currentPosition = fenToObj(pos)
      } else if (typeof pos === 'object') {
        currentPosition = pos
      }
      drawBoard()
    },
    flip() {
      config.orientation = config.orientation === 'black' ? 'white' : 'black'
      drawBoard()
    },
    orientation() {
      return config.orientation
    }
  }
}

function fenToObj(fen) {
  const obj = {}
  const rows = fen.split(' ')[0].split('/')
  const files = ['a','b','c','d','e','f','g','h']

  rows.forEach((row, rankIdx) => {
    let fileIdx = 0
    for (const char of row) {
      if (Number.isInteger(+char)) {
        fileIdx += +char
      } else {
        const file = files[fileIdx]
        const rank = 8 - rankIdx
        obj[file + rank] = (char === char.toUpperCase() ? 'w' : 'b') + char.toLowerCase()
        fileIdx++
      }
    }
  })
  return obj
}
