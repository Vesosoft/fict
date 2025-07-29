export function initControls(board) {
  const flipButton = document.getElementById('flip')
  if (flipButton) {
    flipButton.addEventListener('click', () => {
      board.flip()
    })
  }
}
document.getElementById('loadPGN').addEventListener('click', () => {
  const pgn = `
[Event "?"]
[Site "?"]
[Date "2025.07.29"]
[Round "?"]
[White "Veso"]
[Black "TestBot"]
[Result "1-0"]

1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5
7. Bb3 d6 8. c3 O-O 9. h3 Nb8 10. d4 Nbd7 11. Nbd2 Bb7 12. Bc2
Re8 13. Nf1 Bf8 14. Ng3 g6 15. a4 Bg7 16. d5 Nc5 17. b4 Ncd7
18. Be3 Qe7 19. Qd2 Qf8 20. Bd3 c6 21. dxc6 Bxc6 22. axb5 axb5
23. Ra5 Rxa5 24. bxa5 Nc5 25. Bxc5 dxc5 26. Rb1 c4 27. Bc2 Qa3
28. Qe3 Qxa5 29. Qc5 Re6 30. Rd1 Qxc3 31. Rd8+ Be8 32. Bd1 Bf8
33. Qc8 Qb4 34. Ng5 Re7 35. Bg4 c3 36. Bd7 c2 37. Bxe8 Nxe8
38. Rxe8 Rxe8 39. Qxe8 c1=Q+ 40. Kh2 Qxg5 41. h4 Qxh4+ 42. Kg1 Qbe1+
43. Nf1 Qexf2# 0-1
`;

  board.position('start');
  game.load_pgn(pgn);
  board.position(game.fen());
});
/*// js/controls.js

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
*/
