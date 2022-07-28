function numIslands(grid: string[][]): number {
  let count = 0;

  function search(row: number, col: number) {
    if (grid[row] && grid[row][col] && grid[row][col] === "1") {
      grid[row][col] = ".";
      search(row - 1, col);
      search(row + 1, col);
      search(row, col - 1);
      search(row, col + 1);
    }
  }

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      if (grid[row][col] === "1") {
        count++;
        search(row, col);
      }
    }
  }
  return count;
}

console.log(
  numIslands([
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"],
  ])
);

console.log(
  numIslands([
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"],
  ])
);
