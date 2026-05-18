let arr = [2, 3, 3, 2, 5, 6, 6, 7, 7, 8, 8];
function singlenumber(arr) {
  let xor = 0;
  for (let i = 0; i < arr.length; i++) {
    xor = xor ^ arr[i];
  }
  return xor;
}
console.log(singlenumber(arr));
