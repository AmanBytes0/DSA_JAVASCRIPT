let n = 10;
function sum(n) {
  if (n == 0) return 0;

  return n + sum(--n);
}
console.log(sum(10));
