export { fillBoard }
import { gameCells } from "./gameInfo/gameCells.js"

const renderFuncs = {
    "corner": renderCorner,
    "property": renderProperty,
    "communityChest": renderChest,
    "tax": renderTax,
    "chance": renderChance,
    "utility": renderUtility
};

function fillBoard(table) {
    const cells = [
        ...[...table.querySelector("tr:last-child:not(:only-child)").cells].reverse(),
        ...[...table.querySelector(".side-row tr").cells].reverse(),
        ...[...table.querySelector("tr").cells],
        ...[...table.querySelector(".right tr").cells].reverse(),
    ]

    cells.forEach((cell, indx) => {
        const descr = gameCells[indx]
        renderFuncs[descr.type](cell, descr)
    })

    return cells;
}

function renderCorner(td, descr) {
    const { name, action } = descr;
    td.innerHTML = `
    <h3>${name}</h3>
    <p>${action}</p>
    `
}

function renderProperty(td, descr) {
    const { name, price, color } = descr;
    td.classList.add("property")
    td.style.setProperty("--prop-color", color)
    td.innerHTML = `
    <h4 class="name">${name}</h4>
    <p class="price">${price}</p>
    `
}

function renderChest(td) {
    td.classList.add("chest")
    td.innerHTML = `
    <h3>Community Chest</h3>
    `
}

function renderTax(td, descr) {
    const { name, tax_amount } = descr;
    td.classList.add("tax")
    td.innerHTML = `
    <h4 class="name">${name}</h4>
    <p class="pay">${tax_amount}</p>
    `
}

function renderChance(td) {
    td.classList.add("chance")
    td.innerHTML = `
    <h3>Chance</h3>
    `
}

function renderUtility(td, descr) {
    const { name } = descr;
    td.classList.add("utility")
    td.innerHTML = `
    <h3>${name}</h3>
    `
}
