function containsDuplicate(nums: number[]): boolean {
  let total = nums[0];

  for (let i = 1; i < nums.length; i++) {
    let tmp = total;

    tmp ^= nums[i];
    console.log({ total, tmp });
    if (tmp < total) return true;
    total = tmp;
  }

  return false;
}

console.log(containsDuplicate([1, 2, 3, 4]), false);
