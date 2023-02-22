export { startGame }

import { gameCells } from "./gameCells.js"


const monopoly = document.querySelector(".monopoly");

async function startGame(gameState, cells, table) {
  const { players } = gameState;

  const chips = players.map((player) => placePlayer(player, cells));

  while (true) {
    const player = players[gameState.next];
    const chip = chips[gameState.next];
    const stepsToMove = await getDiceThrow();
    await movePlayer(player, stepsToMove, cells, chip);
    player.cell += stepsToMove;
    gameState.next++;
  }
}

async function movePlayer(player, stepsToMove, cells, chip) {
  while (stepsToMove--) {
    await new Promise((resolve) => {
      const cell = cells[++player.cell];
      const { width, height, left, top } = cell.getBoundingClientRect();

      chip.style.left = left + (width / 2) - 15 + "px";
      chip.style.top = top + (height / 2) - 15 + "px";

      chip.addEventListener("transitionend", resolve, { once: true });
    })
  }
}

function placePlayer(player, cells) {
  const chip = document.createElement("div");
  const cell = cells[player.cell];
  const { width, height, left, top } = cell.getBoundingClientRect();

  chip.className = "chip";
  chip.style.setProperty("--player-color", player.color);

  chip.style.left = left + (width / 2) - 15 + "px";
  chip.style.top = top + (height / 2) - 15 + "px";

  monopoly.append(chip);

  return chip;
}

function getDiceThrow() {
  return 40;
}