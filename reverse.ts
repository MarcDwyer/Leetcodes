function reverseBits(n: number): number {
  let start = 0b0;

  for (let i = 0; i < 32; i++) {
    const lastBit = n & 0b1;
    start <<= 1;

    start |= lastBit;

    n >>= 1;
  }

  return start >>> 0;
}

console.log(reverseBits(3));
// 8 4 2 1
// 0 0 1 1
