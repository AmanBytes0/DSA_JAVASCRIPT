let arr = ["h", "e", "l", "l", "o"];
function reverseString(arr) {
  for (let i = 0; i < (arr.length - 1) / 2; i++) {
    let temp = arr[i];
    arr[i] = arr[arr.length - 1];
    arr[arr.length - 1] = temp;
  }
  return arr;
}
console.log(reverseString(arr));
