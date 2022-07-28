function getSum(n: number, b: number) {
  while (b !== 0) {
    const carry = n & b;
    n ^= b;
    b = carry << 1;
  }

  return n;
}

console.log(getSum(1, 2), 3);

console.log(getSum(24, 24), 48);

console.log(getSum(12, 24), 36);

function getSums(nums: number[]) {
  let total = nums[0];

  for (let i = 1; i < nums.length; i++) {
    let curr = nums[i];

    while (curr !== 0) {
      const carry = curr & total;

      total ^= curr;
      curr = carry << 1;
    }
  }

  return total;
}

console.log(getSums([4, 2, 4]), 10);
console.log(getSums([1963, 12500, 384, -100]), 14747);
