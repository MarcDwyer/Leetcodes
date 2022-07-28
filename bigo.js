function square(n) {
  for (let i = 2; i * i <= n; i++) {
    console.log({ i });
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

// square(16);
// square(17);

function sumDigits(n) {
  let sum = 0;
  let passes = 0;
  while (n > 0) {
    sum += n % 10;
    n /= 10;
    passes++;
  }

  return { sum, passes, n };
}
console.log(sumDigits(214));

function allFib(n) {
  for (let i = 0; i <= n; i++) {
    console.log({ res: fib(i), i });
  }
}
function fib(n) {
  if (n <= 0) return 0;
  if (n === 1) return 1;
  return fib(n - 1) + fib(n - 2);
}

// allFib(24);

let passes = 0;

function powers(n) {
  passes++;
  if (n < 1) return 0;
  if (n === 1) return 1;

  const prev = powers(n / 2);

  const curr = prev * 2;
  console.log({ prev, curr });
  return curr;
}
// console.log(powers(16), passes);
