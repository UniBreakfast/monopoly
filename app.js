import { renderBoard } from "./js/board.js";
import { fillBoard } from "./js/fill.js";
import { prepGameState } from "./js/gameState.js";
import { startGame } from "./js/gameLoop.js";
import { getPlayerNames } from "./js/modals/forms.js";

const table = renderBoard();
export const cells = fillBoard(table);

main();

async function main() {
  const playerNames = await getPlayerNames();
  const gameState = prepGameState(...playerNames);

  startGame(gameState, cells, table);
}
