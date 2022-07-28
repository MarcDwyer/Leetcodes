function countBits(n: number): number[] {
  const dp = new Array(n + 1).fill(0);

  dp[0] = 0;
  if (n === 0) return dp;

  dp[1] = 1;

  let offset = 2;

  for (let i = 2; i < dp.length; i++) {
    if (offset * 2 === i) offset *= 2;

    dp[i] = dp[i - offset] + 1;
  }

  return dp;
}

console.log(countBits(4));
// console.log(countBits(2));
// console.log(countBits(8));
// console.log(countBits(0));
// console.log(countBits(1));

// 0000 - 0
// 0001 - 1
// 0010 - 1
// 0011 - 2
// 0100 - 1  (4)
// 0101 - 2
// 0110 - 2
// 0111 - 3
// 1000 - 1 (8)
