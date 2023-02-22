import { renderBoard } from "./board.js"
import { fillBoard } from "./fill.js";
import { prepGameState } from "./gameState.js"
import { startGame } from "./gameLoop.js";

const table = renderBoard();

const cells = fillBoard(table);

const gameState = prepGameState("Bob", "Alice");

startGame(gameState, cells, table);