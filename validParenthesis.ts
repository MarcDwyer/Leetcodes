function isValid(s: string): boolean {
  let count = 0;

  const brackets = new Map([
    ["{", "}"],
    ["(", ")"],
    ["[", "]"],
  ]);
  const arr = [s[0]];

  for (let i = 1; i < s.length; i++) {
    if (brackets.get(arr[arr.length - 1]) === s[i]) {
      arr.pop();
    } else {
      arr.push(s[i]);
    }
  }
  return arr.length === 0;
}

// console.log(isValid("()[]{}"));

// console.log(isValid("()"));

// console.log(isValid("(]"));

console.log(isValid("([])"), true);
