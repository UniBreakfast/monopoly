export { sleep, random }

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

function random(limit) {
  return Math.floor(Math.random() * limit);
}
