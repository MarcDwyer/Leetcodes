/**
 * Look at the 2 element from behind current indices and add
 * that to current number. If dp[i - 2] + nums[i] is less than dp[i - 1]
 * then just set dp[i] to previous result which is dp[i - 1]
 */

function rob(nums: number[]): number {
  if (nums.length == 1) {
    return nums[0];
  }
  if (nums.length == 2) {
    return Math.max(nums[0], nums[1]);
  }
  const dp: number[] = new Array(nums.length).fill(0);
  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);

  for (let i = 2; i < nums.length; i++) {
    dp[i] = Math.max(nums[i] + dp[i - 2], dp[i - 1]);
  }

  console.log({ dp });
  return dp[dp.length - 1];
}

console.log(rob([1, 2, 3, 1]));
