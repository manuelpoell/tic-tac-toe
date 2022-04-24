export const cpuPick = (tiles, xTurn) => {
  const rndIndex = Math.floor(Math.random() * tiles.length)

  if (tiles[rndIndex] === '') {
    return rndIndex
  } else {
    return cpuPick(tiles, xTurn)
  }
}
