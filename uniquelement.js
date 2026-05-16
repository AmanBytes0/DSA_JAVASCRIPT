let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
function findunique(arr) {
  let x = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[x]) {
      x++;
      arr[x] = arr[i];
    }
  }
  return x + 1;
}
console.log(findunique(arr));
