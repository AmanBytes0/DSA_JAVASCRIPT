let array = [3, 4, 5, 6, 7];
function reverse(arr) {
  let arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    let val = arr[arr.length - i - 1];
    arr2[i] = val;
  }
  return arr2;
}
console.log(reverse(array));
