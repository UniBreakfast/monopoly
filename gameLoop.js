export { startGame }

import { gameCells } from "./gameCells.js"
import { getPlayerReady, showdieThrow } from "./forms.js"

const monopoly = document.querySelector(".monopoly");

async function startGame(gameState, cells, table) {
  const { players } = gameState;

  const chips = players.map((player) => placePlayer(player, cells));

  while (true) {
    const player = players[gameState.next];
    const chip = chips[gameState.next];

    await getPlayerReady(player.name);

    const stepsToMove = await getdieThrow();

    await movePlayer(player, stepsToMove, cells, chip);

    gameState.next = (gameState.next + 1) % gameState.players.length;
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
    await sleep(50);
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

async function getdieThrow() {
  const roll1 = random(6) + 1;
  const roll2 = random(6) + 1;

  await showdieThrow(roll1, roll2);

  return roll1 + roll2;
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

function random(limit) {
  return Math.floor(Math.random() * limit);
}

