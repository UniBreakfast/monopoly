
export { cardFuncs }

import { cells } from "../app.js"
import { showChest } from "./modals/chestModal.js"
import { transportPlayer } from "./moveChip.js"

const cardFuncs = {
  async move({player, cell, chip, card }) {
    await showChest(player, card);

    transportPlayer(cells[cell.destination], chip);

   },
  async credit({ cc, player, cell, chip }) { },
  async debit({ cc, player, cell, chip }) { },
  async getOutOfJailFree({ cc, player, cell, chip }) { },
  async collectFromPlayers({ cc, player, cell, chip }) { },
  async debitPerBuilding({ cc, player, cell, chip }) { },
  async debitFromPlayers({ cc, player, cell, chip }) { },
  async choice({ cc, player, cell, chip }) { },
  async moveToNearestUtility({ cc, player, cell, chip }) { },
}