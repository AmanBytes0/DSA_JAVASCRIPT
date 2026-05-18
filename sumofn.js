function findsum(n) {
  if (n == 0) return 0;
  return n + findsum(n - 1);
}
console.log(findsum(100));
