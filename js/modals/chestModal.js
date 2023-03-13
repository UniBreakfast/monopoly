export { showChest }

function showChest(player, cell) {
  return new Promise((resolve) => {
    const modal = document.createElement("dialog");
    const form = document.createElement("form");
    const btn = document.createElement("button");

    form.className = "go-corner";
    form.onsubmit = e => {
      e.preventDefault();
      resolve()
      modal.remove();
    }

    btn.append("Ok");
    modal.appendChild(form).innerHTML = `${cell.text}`;
    form.append(btn);

    document.body.append(modal);

    modal.showModal();
  })
}