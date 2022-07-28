/**
 * Look at the cells WE KNOW are hitting the ATL & PAC ocean
 * use this to our advantage and dfs surrounding cells
 * to see if they are of higher elevation than the cell WE KNOW
 * is hitting it's perspective ocean
 */

function pacificAtlantic(heights: number[][]): number[][] {
  const atl = new Set();
  const pac = new Set();

  function dfs(row: number, col: number, set: Set<any>, prevHeight: number) {
    const key = `${row}:${col}`;
    if (
      !heights[row] ||
      (heights[row] && typeof heights[row][col]) !== "number" ||
      prevHeight > heights[row][col] ||
      set.has(key)
    ) {
      return;
    }

    set.add(key);
    const height = heights[row][col];
    dfs(row - 1, col, set, height);
    dfs(row + 1, col, set, height);
    dfs(row, col + 1, set, height);
    dfs(row, col - 1, set, height);
  }

  const colLen = heights[0].length;
  const rowLen = heights.length;

  for (let col = 0; col < colLen; col++) {
    dfs(0, col, pac, heights[0][col]);
    dfs(rowLen - 1, col, atl, heights[rowLen - 1][col]);
  }

  for (let row = 0; row < rowLen; row++) {
    dfs(row, 0, pac, heights[row][0]);
    dfs(row, colLen - 1, atl, heights[row][colLen - 1]);
  }

  const res = [];
  for (let row = 0; row < rowLen; row++) {
    for (let col = 0; col < colLen; col++) {
      const key = `${row}:${col}`;

      if (atl.has(key) && pac.has(key)) {
        res.push([row, col]);
      }
    }
  }
  return res;
}

console.log(
  pacificAtlantic([
    [1, 2, 2, 3, 5],
    [3, 2, 3, 4, 4],
    [2, 4, 5, 3, 1],
    [6, 7, 1, 4, 5],
    [5, 1, 1, 2, 4],
  ])
);

console.log(
  pacificAtlantic([
    [3, 3, 3],
    [3, 1, 3],
    [0, 2, 4],
  ])
);
