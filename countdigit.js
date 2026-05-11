let n = 4567834;

function count(n) {
  let countnum = 0;
  n = Math.abs(n);
  if (n == 0) return 1;
  while (n > 0) {
    n = Math.floor(n / 10);
    countnum++;
  }
  return countnum;
}
console.log(count(-675));
