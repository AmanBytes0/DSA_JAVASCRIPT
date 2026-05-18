let arr = [1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0];
function maxcount(arr) {
  let maxcount = 0;
  let currentcount = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 1) {
      currentcount++;
      maxcount = Math.max(currentcount, maxcount);
    } else {
      currentcount = 0;
    }
  }
  return Math.max(currentcount, maxcount);
}
console.log(maxcount(arr));
