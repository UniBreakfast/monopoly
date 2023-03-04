export { prepGameState }

import { communityChest } from "./gameInfo/communityChest.js";
import { chance } from "./gameInfo/chance.js"

const colors = ["yellow", "blue", "red", "green", "orange"];

function prepGameState(...names) {
  const gameState = {
    players: names.map(makePlayer),
    next: 0,
    turn: 1,
    communityChest: [...communityChest.keys()],
    chance: [...chance.keys()],
  };

  shuffle(gameState.players);
  shuffle(gameState.communityChest);
  shuffle(gameState.chance);

  return gameState;
}

function makePlayer(name) {
  const player = {
    name,
    money: 100,
    color: randomColor(),
    property: [],
    utility: [],
    cell: 0,
    parking: false
  }

  return player;
}

function randomColor() {
  const i = Math.floor(Math.random() * colors.length);
  const [color] = colors.splice(i, 1);

  return color;
}

function shuffle(arr) {
  return arr.sort(() => Math.random() > 0.5 ? 1 : -1);
}
