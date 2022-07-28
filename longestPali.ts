function longestPalindrome(s: string): string {
  let str = "";

  let count = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < s.length; i++) {
    let left = i;
    let right = i;

    while (left >= 0 && right < s.length && s[left] === s[right]) {
      const tmpCount = right - left;
      if (tmpCount > count) {
        count = tmpCount;
        str = s.substring(left, right + 1);
      }
      right++;
      left -= 1;
    }

    left = i;
    right = i + 1;

    while (left >= 0 && right < s.length && s[left] === s[right]) {
      const tmpCount = right - left;
      if (tmpCount > count) {
        count = tmpCount;
        str = s.substring(left, right + 1);
      }

      right++;
      left -= 1;
    }
  }

  return str;
}
console.log(longestPalindrome("babad"));
console.log(longestPalindrome("a"));
console.log(longestPalindrome("ac"));
console.log(longestPalindrome("cbbd"));
