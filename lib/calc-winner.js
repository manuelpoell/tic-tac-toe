export const calculateWinner = tiles => {
  const winningLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 5, 8],
    [2, 4, 6]
  ]

  for (let i = 0; i < winningLines.length; i++) {
    const [a, b, c] = winningLines[i]
    if (tiles[a] && tiles[a] === tiles[b] && tiles[a] === tiles[c])
      return { mark: tiles[a], line: winningLines[i] }
  }

  if (tiles.filter(tile => tile === '').length === 0)
    return { mark: 'TIE', line: [] }
  return null
}
