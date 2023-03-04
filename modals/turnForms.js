export { showTaxPay, showJailTime, showLot, showVisitProperty, showCorner, showVisitUtility }

function showTaxPay(player, cell) {
  return new Promise((resolve) => {
    const modal = document.createElement("dialog");
    const form = document.createElement("form");
    const btn = document.createElement("button");

    form.className = "tax-form";
    form.onsubmit = e => {
      e.preventDefault();
      resolve()
      modal.remove();
    }

    btn.append("Ok");
    modal.appendChild(form).innerHTML = `${player.name} pays taxes: $${cell.tax_amount}.<br> Funds: $${player.money} ⇒ $${player.money - cell.tax_amount} `;
    form.append(btn);

    document.body.append(modal);

    modal.showModal();
  })
}

function showJailTime(player, cell) {
  return new Promise((resolve) => {
    const modal = document.createElement("dialog");
    const form = document.createElement("form");
    const btn = document.createElement("button");

    form.className = "jail-time";
    form.onsubmit = e => {
      e.preventDefault();
      resolve()
      modal.remove();
    }

    btn.append("Ok");
    modal.appendChild(form).innerHTML = `${player.name} pays fine: $${cell.fine_amount}.<br> Funds: $${player.money} ⇒ $${player.money - cell.fine_amount} `;
    form.append(btn);

    document.body.append(modal);

    modal.showModal();
  })
}

function showLot(player, cell) {
  return new Promise((resolve) => {
    const modal = document.createElement("dialog");
    const form = document.createElement("form");
    const yesBtn = document.createElement("button");
    const noBtn = document.createElement("button");

    form.className = "property-lot";
    form.onsubmit = e => {
      e.preventDefault();

      resolve(e.submitter.innerText === "Yes");

      modal.remove();
    }

    yesBtn.append("Yes");
    noBtn.append("No");
    modal.appendChild(form).innerHTML = `Lot: ${cell.name} <br> Price: $${cell.price} <br> Do you wanna buy? <br>`;

    form.append(yesBtn, noBtn);

    document.body.append(modal);

    modal.showModal();
  })
}

function showVisitProperty(player, cellOwner, cell) {
  return new Promise((resolve) => {
    const modal = document.createElement("dialog");
    const form = document.createElement("form");
    const btn = document.createElement("button");

    form.className = "visit-property";
    form.onsubmit = e => {
      e.preventDefault();
      resolve()
      modal.remove();
    }

    btn.append("Ok");
    modal.appendChild(form).innerHTML = `${player.name} visiting ${cell.name} <br> Owner: ${cellOwner.name} <br> Pay rent: $${cell.rent[0]} <br> Funds: $${player.money} ⇒ $${player.money - cell.rent[0]} `;
    form.append(btn);

    document.body.append(modal);

    modal.showModal();
  })
}

function showVisitUtility(player, cellOwner, cell) {
  return new Promise((resolve) => {
    const modal = document.createElement("dialog");
    const form = document.createElement("form");
    const btn = document.createElement("button");

    form.className = "visit-utility";
    form.onsubmit = e => {
      e.preventDefault();
      resolve()
      modal.remove();
    }

    btn.append("Ok");
    modal.appendChild(form).innerHTML = `${player.name} visiting ${cell.name} <br> Owner: ${cellOwner.name} `;
    form.append(btn);

    document.body.append(modal);

    modal.showModal();
  })
}

function showCorner(player, cell) {
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
    modal.appendChild(form).innerHTML = `${cell.action}`;
    form.append(btn);

    document.body.append(modal);

    modal.showModal();
  })
}