function minWindow(s: string, t: string): string {
  const req = new Map();

  for (const char of t) {
    req.set(char, req.get(char) ? req.get(char) + 1 : 1);
  }

  let left = 0;
  let right = 0;

  let count = 0;

  const map = new Map();

  let substr = "";

  while (right < s.length) {
    if (req.has(s[right])) {
      const charCount = map
        .set(s[right], map.get(s[right]) ? map.get(s[right]) + 1 : 1)
        .get(s[right]);

      if (charCount <= req.get(s[right])) {
        count++;
      }
    }
    right++;

    while (count === t.length) {
      const subStr = s.substring(left, right);
      if (!substr || subStr.length < substr.length) substr = subStr;
      const charCount = map.set(s[left], map.get(s[left]) - 1).get(s[left]);

      if (charCount < req.get(s[left])) count--;
      left++;
    }
  }
  return substr;
}
console.log(minWindow("ADOBECODEBANC", "ABC"));
