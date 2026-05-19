let arr = [2, 3, 5, 6, 7, 8, 12, 22];
function findsum(n) {
  isodd = arr[n] % 2 !== 0;
  if (n == 0) {
    if (isodd) {
      return arr[n];
    } else return 0;
  }
  if (isodd) {
    return arr[n] + findsum(n - 1);
  } else return 0 + findsum(n - 1);
}
console.log(findsum(arr.length - 1));
