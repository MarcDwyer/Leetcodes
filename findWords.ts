function findWords(board: string[][], words: string[]): string[] {
  const found: string[] = [];
  let total = 0;

  function search(
    row: number,
    col: number,
    word: string,
    index: number,
    set: Set<string>
  ): boolean {
    const key = `${row}:${col}`;
    if (
      board[row] &&
      board[row][col] &&
      word[index] === board[row][col] &&
      !set.has(key)
    ) {
      const nextIndex = index + 1;
      set.add(key);

      console.log({
        char: word[index],
        pos: board[row][col],
        word,
      });

      const found =
        search(row + 1, col, word, nextIndex, set) ||
        search(row - 1, col, word, nextIndex, set) ||
        search(row, col - 1, word, nextIndex, set) ||
        search(row, col + 1, word, nextIndex, set);

      return found;
    }
    return false;
  }
  for (const word of words) {
    for (let row = 0; row < board.length; row++) {
      for (let col = 0; col < board[row].length; col++) {
        const set = new Set<string>();
        search(row, col, word, 0, set);
        console.log({ total });
        if (total >= word.length) {
          found.push(word);
          row = board.length - 1;
          col = board[0].length;
          total = 0;
        }
      }
    }
  }

  return found;
}

// console.log(
//   findWords(
//     [
//       ["o", "a", "b", "n"],
//       ["o", "t", "a", "e"],
//       ["a", "h", "k", "r"],
//       ["a", "f", "l", "v"],
//     ],
//     ["oa", "oaa"]
//   ),
//   ["oa", "oaa"]
// );

// console.log(findWords([["a", "a"]], ["aaa"]));

console.log(
  findWords(
    [
      ["a", "b"],
      ["a", "a"],
    ],
    ["aba", "baa", "bab", "aaab", "aaa", "aaaa", "aaba"]
  )
);
// console.log(
//   findWords(
//     [
//       ["o", "a", "a", "n"],
//       ["e", "t", "a", "e"],
//       ["i", "h", "k", "r"],
//       ["i", "f", "l", "v"],
//     ],
//     ["oath", "pea", "eat", "rain"]
//   )
// );
