function doubleNumber(n) {
  return n << 1;
}

// console.log(doubleNumber(12), 24);

function multiplyByFour(n) {
  return n << 2;
}

// console.log(multiplyByFour(4), 16);
// console.log(multiplyByFour(3), 12);

const arr = new Array(10);

for (let i = 0; i < arr.length; i++) {
  arr[i ^ 1] = i;
}

function getBit(n, i) {
  return (n & (1 << i)) !== 0;
}

console.log(getBit(2, 1));
