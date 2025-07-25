import { Chess } from "../libs/chess.min.js";
import { drawBoard, updateBoard } from "./draw.js";

export let game;
export let boardOrientation = "white";

export function createBoard(containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";
  drawBoard(container, boardOrientation);
  game = new Chess();
}

export function resetBoard(containerId) {
  createBoard(containerId);
}

export function flipBoard(containerId) {
  boardOrientation = boardOrientation === "white" ? "black" : "white";
  updateBoard(containerId, game, boardOrientation);
}

export function loadPGN(pgn, containerId) {
  if (!game.load_pgn(pgn)) {
    alert("Невалиден PGN.");
    return;
  }
  updateBoard(containerId, game, boardOrientation);
}
