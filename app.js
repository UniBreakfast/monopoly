import { renderBoard } from "./board.js";
import { fillBoard } from "./fill.js";
import { prepGameState } from "./gameState.js";
import { startGame } from "./gameLoop.js";
import { getPlayerNames } from "./forms.js";

const table = renderBoard();
const cells = fillBoard(table);

main();

async function main() {
  const playerNames = await getPlayerNames();
  const gameState = prepGameState(...playerNames);

  startGame(gameState, cells, table);
}
