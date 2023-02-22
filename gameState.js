export { prepGameState }

const colors = ["yellow", "blue", "red", "green", "orange"];

function prepGameState(...names) {
  const gameState = {
    players: names.map(makePlayer),
    next: 0,
    turn: 1
  };

  shuffle(gameState.players);

  return gameState;
}

function makePlayer(name) {
  const player = {
    name,
    money: 100,
    color: randomColor(),
    property: [],
    cell: 0
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
