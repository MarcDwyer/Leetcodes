function exist(board: string[][], word: string): boolean {
  function match(
    row: number,
    col: number,
    index: number,
    visited: Set<string>
  ): boolean {
    const key = `${row}:${col}`;
    console.log({ index, visited });

    if (
      board[row] &&
      board[row][col] &&
      board[row][col] === word[index] &&
      !visited.has(key)
    ) {
      visited.add(key);
      index++;

      const found =
        match(row + 1, col, index, visited) ||
        match(row - 1, col, index, visited) ||
        match(row, col + 1, index, visited) ||
        match(row, col - 1, index, visited);

      visited.delete(key);

      return found;
    } else if (index === word.length) {
      return true;
    }
    return false;
  }

  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[row].length; col++) {
      if (match(row, col, 0, new Set())) {
        return true;
      }
    }
  }

  return false;
}
// console.log(
//   exist(
//     [
//       ["A", "B", "C", "E"],
//       ["S", "F", "C", "S"],
//       ["A", "D", "E", "E"],
//     ],
//     "ABCCED"
//   ),
//   true
// );

console.log(
  exist(
    [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"],
    ],
    "ABCB"
  ),
  false
);

console.log(
  exist(
    [
      ["A", "B", "C", "E"],
      ["S", "F", "E", "S"],
      ["A", "D", "E", "E"],
    ],
    "ABCESEEEFS"
  ),
  true
);
