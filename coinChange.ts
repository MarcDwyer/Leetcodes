/**
 * Solve dynamically, solve for how many coins in each indices leading up
 * to amount.
 * Pattern: Break the probelm down into something simpler
 */

function coinChange(coins: number[], amount: number): number {
  const dp = new Array(amount + 1).fill(Infinity);

  dp[0] = 0;

  for (let i = 1; i < dp.length; i++) {
    let tmpMin = Infinity;
    for (const coin of coins) {
      if (coin <= i) {
        const remaining = i - coin;
        tmpMin = Math.min(tmpMin, dp[remaining] + 1);
      }
    }

    dp[i] = Math.min(dp[i], tmpMin);
  }
  return dp[dp.length - 1] === Infinity ? -1 : dp[dp.length - 1];
}

console.log(coinChange([1, 2, 5], 11));
