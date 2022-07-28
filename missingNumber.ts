function missingNumber(nums: number[]): number {
  /**
   * Set output to maximum possible number within array which is nums.lenght
   * then we xor output with index and nums[i]
   * XOR essentially cancels duplicate numbers out
   * and gives us what is left
   */
  let output = nums.length;

  for (let i = 0; i < nums.length; i++) {
    output ^= i ^ nums[i];
  }

  return output;
}

console.log(missingNumber([3, 0, 1]));
// 0, 1, 2

// 4
// 4 + 3 + 2 + 1 10
const set = new Set();

set.add(1);
