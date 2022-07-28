function longestConsecutive(nums: number[]): number {
  const set = new Set(nums);

  let total = 0;

  for (let num of nums) {
    if (set.has(num - 1)) {
      continue;
    } else {
      let tmp = 0;
      while (set.has(num)) {
        tmp++;
        num++;
      }
      console.log({ tmp });
      total = Math.max(total, tmp);
    }
  }

  return total;
}

console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));
// console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
