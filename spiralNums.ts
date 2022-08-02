/**
 * Use several pointers
 */

function spiralOrder(matrix: number[][]): number[] {
  const nums: number[] = [];

  if (!matrix.length) return nums;

  let top = 0;
  let left = 0;
  let right = matrix[0].length - 1;
  let bottom = matrix.length - 1;

  const size = matrix.length * matrix[0].length;

  const checkSize = () => nums.length < size;

  while (checkSize()) {
    for (let i = left; i <= right && checkSize(); i++) {
      nums.push(matrix[top][i]);
    }
    top++;
    for (let i = top; i <= bottom && checkSize(); i++) {
      nums.push(matrix[i][right]);
    }
    right--;
    for (let i = right; i >= 0 && checkSize(); i--) {
      nums.push(matrix[bottom][i]);
    }
    bottom--;
    for (let i = bottom; i >= top && checkSize(); i--) {
      nums.push(matrix[i][left]);
    }
    left++;
  }

  return nums;
}

// console.log(
//   spiralOrder([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ])
// );

console.log(
  spiralOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);

// console.log(
//   spiralOrder([
//     [1, 2, 3, 5],
//     [4, 5, 6, 5],
//     [7, 8, 9, 7],
//     [7, 8, 9, 7],
//   ])
// );
