export { renderBoard }
import { trackLength } from "./config.js"

const monopolyWrapper = document.querySelector(".monopoly");

function renderBoard() {
  const table = document.createElement("table");
  const tbody = document.createElement("tbody");
  const topRow = buildRow();
  const middleRow = buildMiddleRow();
  const bottomRow = buildRow();

  table.appendChild(tbody).append(topRow, middleRow, bottomRow);
  table.style.setProperty("--row-length", (trackLength / 4) - 1);

  monopolyWrapper.append(table);

  return table;
}

function buildRow() {
  const tr = document.createElement("tr");
  const rowLength = (trackLength / 4) + 1;

  for (let i = 0; i < rowLength; i++) {
    const td = document.createElement("td");

    if (i && i < 10) {
      td.className = "card";
    }

    tr.append(td);
  }

  return tr;
}

function buildMiddleRow() {
  const tr = document.createElement("tr");
  const leftTd = buildSideRow();
  const arena = document.createElement("td");
  const rightTd = buildSideRow();

  tr.append(leftTd, arena, rightTd);
  arena.className = "arena";
  arena.colSpan = (trackLength / 4) - 1;
  rightTd.firstChild.classList.add("right");

  return tr;
}

function buildSideRow() {
  const td = document.createElement("td");
  const table = document.createElement("table");
  const tbody = document.createElement("tbody");
  const tr = document.createElement("tr");
  const rowLength = (trackLength / 4) - 1;

  table.className = "side-row";

  for (let i = 0; i < rowLength; i++) {
    const td = document.createElement("td");

    td.className = "card";
    tr.append(td);
  }

  td.appendChild(table).appendChild(tbody).appendChild(tr);

  return td;
}