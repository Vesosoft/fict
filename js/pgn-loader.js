let interval = null;
let isPlaying = false;

// Свържи бутоните, ако ги има
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

  const playPauseBtn = document.getElementById('playPauseBtn');
  if (playPauseBtn) {
    playPauseBtn.onclick = () => {
      if (!isPlaying) {
        playPauseBtn.textContent = '⏸️';
        isPlaying = true;
        interval = setInterval(() => {
          if (moveIndex >= history.length) {
            clearInterval(interval);
            isPlaying = false;
            playPauseBtn.textContent = '▶️';
            return;
          }
          game.move(history[moveIndex]);
          board.position(game.fen());
          moveIndex++;
        }, 1000);
      } else {
        clearInterval(interval);
        isPlaying = false;
        playPauseBtn.textContent = '▶️';
      }
    };
  }
} else {
  // Без бутони – автоматично проиграване
  interval = setInterval(() => {
    if (moveIndex >= history.length) {
      clearInterval(interval);
      return;
    }
    game.move(history[moveIndex]);
    board.position(game.fen());
    moveIndex++;
  }, 1000);
}
