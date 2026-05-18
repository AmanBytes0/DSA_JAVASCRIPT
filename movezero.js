let arr = [3, 0, 0, 0, 0, -12, -2, 3, 0, 5];
function movezero(arr) {
  let x = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[x] = arr[i];
      x++;
    }
  }
  for (let j = x; j < arr.length; j++) {
    arr[j] = 0;
  }
  return arr;
}
console.log(movezero(arr));
