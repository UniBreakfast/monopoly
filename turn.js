export { turnFuncs }

import { showTaxPay, showJailTime, showVisitProperty, showPropertyLot } from "./modals/turnForms.js"

const turnFuncs = {
  async corner(player, cell) {
    await showCorner(player, cell);

    switch (cell.name) {
      case "Go":
        player.money += cell.salary_amount;
        break;
      case "Jail":
        break;
      case "Free Parking":
        break;
      case "Go to Jail":
        break;

      default:
        break;
    }
  },

  async property(player, cell, players) {
    const cellOwner = players.find(({ property }) => property.includes(player.cell))

    if (cellOwner) {
      await showVisitProperty(player, cellOwner, cell);
      player.money -= cell.rent[0];
      console.log(player);
    } else {
      const buys = await showPropertyLot(player, cell);

      if (buys) {
        player.money -= cell.price;
        player.property.push(player.cell);
        console.log(player);
      }
    }
  },

  async communityChest() { },

  async tax(player, cell) {
    await showTaxPay(player, cell);
    player.money -= cell.tax_amount;
  },
  async chance() { },

  async utility() { },

  async jail(player, cell) {
    await showJailTime(player, cell);
    player.money -= cell.fine_amount;
  },
};