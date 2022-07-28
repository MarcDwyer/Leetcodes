var lengthOfLIS = function (nums) {
  const dp = new Array(nums.length).fill(1);

  let max = 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] < nums[j] && dp[j] + 1 > dp[i]) {
        dp[i] = dp[j] + 1;
      }
    }
    max = Math.max(max, dp[i]);
  }
  console.log({ dp });
  return max;
};

console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));
