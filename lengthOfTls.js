function lengthOfLIS(nums) {
  const dp = new Array(nums.length).fill(1);
  let max = 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] < nums[j] && dp[j] + 1 > dp[i]) {
        dp[i] = dp[j] + 1;
      }
    }
    max = Math.max(dp[i], max);
  }
  return max;
}

console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]), [2, 3, 7, 101].length);
// console.log(lengthOfLIS([0, 1, 0, 3, 2, 3]), 4);
// console.log(lengthOfLIS([7, 7, 7, 7, 7, 7, 7]), 1);
// console.log(lengthOfLIS([4, 10, 4, 3, 8, 9]), 3);
