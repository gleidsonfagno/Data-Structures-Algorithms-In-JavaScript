// Memoization
// js object , keys wils be arg to fn, vaues will the be return value

const fib = (n, memo = {}) => {
  if (n in memo) return memo[n];
  if (n <= 2) return 1;
  memo[n] =  fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n]
};
// O(2^n) time
// O(n) space

console.log(fib(6));
console.log(fib(7));
console.log(fib(8));
console.log(fib(50))

const foo = (n) => {
  if (n <= 1) return;
  foo(n - 1);
};
// O(n) time
// O(n) space

const bar = (n) => {
  if (n <= 1) return;
  bar(n - 2);
};
// O(n/2) time

const dib = (n) => {
  if (n <= 1) return;
  dib(n - 1);
  dib(n - 1);
};
// O(2^n) time
// O(n) space

const lib = (n) => {
  if (n <= 1) return;
  lib(n - 2);
  lib(n - 2);
};

// O(2^n/2) time
// 0(n^2) space
