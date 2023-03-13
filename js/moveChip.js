export { movePlayer, transportPlayer }

import { sleep } from "./tools/tools.js";
import { turnFuncs } from "./turn.js";
import { gameCells } from "./gameInfo/gameCells.js";

async function movePlayer(player, stepsToMove, cells, chip) {
  let playerCell = player.cell;

  while (stepsToMove--) {
    playerCell = (playerCell + 1) % cells.length;
    await new Promise((resolve) => {
      const cell = cells[playerCell];
      const { width, height, left, top } = cell.getBoundingClientRect();

      chip.style.left = left + (width / 2) - 15 + "px";
      chip.style.top = top + (height / 2) - 15 + "px";

      chip.addEventListener("transitionend", resolve, { once: true });
    })
    await sleep(50);

    if (playerCell === 0) {
      await turnFuncs.corner({ player, cell: gameCells[0] });
    }
  }
}

async function transportPlayer(targetCell, chip) {
  await new Promise((resolve) => {
    const { width, height, left, top } = targetCell.getBoundingClientRect();

    chip.style.left = left + (width / 2) - 15 + "px";
    chip.style.top = top + (height / 2) - 15 + "px";
    chip.style.transition = "1s";

    chip.addEventListener("transitionend", () => {
      resolve();
      chip.style.transition = null
    }, { once: true });
  })
  await sleep(50);
}