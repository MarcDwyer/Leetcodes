/**
 * Looks throughout the string and caches every single word match possible
 */
// O(s.length*wordDict.length)
function wordBreak(s: string, wordDict: string[]): boolean {
  const dp = new Array(s.length + 1).fill(false);
  dp[0] = true;

  for (let i = 0; i < s.length; i++) {
    for (const word of wordDict) {
      if (dp[i]) {
        const substr = s.substring(i, i + word.length);
        if (substr === word) {
          dp[i + word.length] = true;
        }
      }
    }
  }
  return dp[dp.length - 1];
}

// console.log(wordBreak("leetcode", ["leet", "code"]), true);
// console.log(wordBreak("applepenapple", ["apple", "pen"]), true);
// console.log(
//   wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"]),
//   false
// );
// console.log(wordBreak("bb", ["a", "b", "bbb", "bbbb"]), true);
console.log(wordBreak("abcd", ["a", "abc", "b", "cd"]), true);
