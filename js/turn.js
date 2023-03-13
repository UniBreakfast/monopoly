export { turnFuncs }

import { cells } from "../app.js";
import { cardFuncs } from "./cardAction.js";
import { transportPlayer } from "./moveChip.js";
import { communityChest as cc } from "./gameInfo/communityChest.js";
import { showTaxPay, showJailTime, showVisitProperty, showLot, showCorner, showVisitUtility } from "./modals/turnForms.js"

const turnFuncs = {
  async corner({ player, cell, chip }) {
    await showCorner(player, cell);

    switch (cell.name) {
      case "Go":
        player.money += cell.salary_amount;
        break;
      case "Jail":
        break;
      case "Free Parking":
        player.parking = true;
        break;
      case "Go to Jail":
        transportPlayer(cells[10], chip);
        player.cell = 10;
        break;

      default:
        break;
    }
  },

  async property({ player, cell, players }) {
    const cellOwner = players.find(({ property }) => property.includes(player.cell))

    if (cellOwner) {
      await showVisitProperty(player, cellOwner, cell);
      player.money -= cell.rent[0];
      console.log(player);
    } else {
      const buys = await showLot(player, cell);

      if (buys) {
        player.money -= cell.price;
        player.property.push(player.cell);
        console.log(player);
      }
    }
  },

  async communityChest({ player, cell, gameState, chip }) {
    const ccCardIndex = gameState.communityChest.pop();
    const card = cc[ccCardIndex];

    await cardFuncs[card.action]({cc, player, cell, chip, card});
  },

  async tax({ player, cell }) {
    await showTaxPay(player, cell);
    player.money -= cell.tax_amount;
  },
  async chance() { },

  async utility({ player, cell, players }) {
    const cellOwner = players.find(({ utility }) => utility.includes(player.cell))

    if (cellOwner) {
      await showVisitUtility(player, cellOwner, cell);
      console.log(player);
    } else {
      const buys = await showLot(player, cell);

      if (buys) {
        player.money -= cell.price;
        player.utility.push(player.cell);
        console.log(player);
      }
    }
   },

  async jail({ player, cell }) {
    await showJailTime(player, cell);
    player.money -= cell.fine_amount;
  },
};