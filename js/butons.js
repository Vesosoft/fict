import { setupAuto } from './butons/auto.js';
import { setupClear } from './butons/clear.js';
import { setupLoad } from './butons/load.js';
import { setupNext } from './butons/next.js';
import { setupPrev } from './butons/prev.js';
import { setupSave } from './butons/save.js';

export function initButtons(game, board) {
  setupAuto(game, board);
  setupClear(game, board);
  setupLoad(game, board);
  setupNext(game, board);
  setupPrev(game, board);
  setupSave(game, board);
}
