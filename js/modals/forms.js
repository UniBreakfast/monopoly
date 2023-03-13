export { getPlayerNames, getPlayerReady, showDieThrow }

function getPlayerNames() {
  return new Promise((resolve) => {
    const modal = document.createElement("dialog");
    const form = document.createElement("form");
    const label1 = createPlayerLabel();
    const label2 = createPlayerLabel();
    const btn = document.createElement("button");

    form.className = "player-names";
    form.oninput = handleInput;
    form.onsubmit = e => {
      e.preventDefault();
      resolve(new FormData(form).getAll("player-name").slice(0, -1))
      modal.remove();
    }

    btn.append("Start");
    modal.appendChild(form).append(label1, label2, btn);
    document.body.append(modal);

    modal.showModal();

    label1.lastChild.value = "Bob";
    label2.lastChild.value = "Alice";

    handleInput.call(form);

  })
}

function createPlayerLabel() {
  const label = document.createElement("label");
  const input = document.createElement("input");

  input.name = "player-name";
  label.append("Player name ", input);

  return label;
}

function handleInput() {
  const inputs = this.querySelectorAll("input");
  const last = inputs[inputs.length - 1]

  for (let i = 0; i < inputs.length - 1; i++) {
    if (!inputs[i].value.trim()) {
      inputs[i].parentElement.remove();
    }
  }

  if (last.value) {
    last.parentElement.insertAdjacentElement("afterend", createPlayerLabel())
  }

}

function getPlayerReady(name) {
  return new Promise((resolve) => {
    const modal = document.createElement("dialog");
    const form = document.createElement("form");
    const btn = document.createElement("button");

    form.className = "player-ready";
    form.onsubmit = e => {
      e.preventDefault();
      resolve();
      modal.remove();
    }

    btn.append("Ready");
    modal.appendChild(form).append(name + ", it`s your turn ", btn);
    document.body.append(modal);

    modal.showModal();
  })
}

function showDieThrow(roll1, roll2) {
  return new Promise((resolve) => {
    const modal = document.createElement("dialog");
    const form = document.createElement("form");
    const die1 = makeDie(roll1);
    const die2 = makeDie(roll2);
    const btn = document.createElement("button");

    form.className = "player-ready";
    form.onsubmit = e => {
      e.preventDefault();
      resolve();
      modal.remove();
    }

    btn.append("Ok");
    modal.appendChild(form).append(die1, die2, btn);
    document.body.append(modal);

    modal.showModal();
  })
}

function makeDie(roll) {
  const die = document.createElement("die");

  for (let i = 0; i < roll; i++) {
    die.append(document.createElement("dot"))
  }

  die.style.rotate = Math.random() + "turn"

  return die;
}