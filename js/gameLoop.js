export { startGame }

import { gameCells } from "./gameInfo/gameCells.js";
import { getPlayerReady, showDieThrow } from "./modals/forms.js";
import { movePlayer } from "./moveChip.js";
import { turnFuncs } from "./turn.js";
import { random } from "./tools/tools.js";

const monopoly = document.querySelector(".monopoly");

async function startGame(gameState, cells, table) {
  const { players } = gameState;

  const chips = players.map((player) => placePlayer(player, cells));

  while (true) {
    const player = players[gameState.next];
    const chip = chips[gameState.next];

    if (player.parking) {
      player.parking = false;
      gameState.next = (gameState.next + 1) % gameState.players.length;

      continue;
    }

    let cell = gameCells[player.cell];

    await getPlayerReady(player.name);

    if (cell.name === "Jail") {
      await turnFuncs.jail({player, cell});
    }

    const stepsToMove = (player.name == "Bob" ? 21 : 15) || await getdieThrow();

    await movePlayer(player, stepsToMove, cells, chip);
    player.cell = (player.cell + stepsToMove) % gameCells.length;

    cell = gameCells[player.cell];

    await turnFuncs[cell.type]({ player, cell, players, chip, gameState });

    gameState.next = (gameState.next + 1) % gameState.players.length;
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

  await showDieThrow(roll1, roll2);

  return roll1 + roll2;
}

