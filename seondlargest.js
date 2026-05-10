let arr = [1, 2, 4, 5, 6, 7, 8, 9];
function secondlargest(arr) {
  let largest = -Infinity;
  let second = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      second = largest;
      largest = arr[i];
    }
    if (arr[i] > second && arr[i] != largest) {
      second = arr[i];
    }
  }
  return second;
}
console.log(secondlargest(arr));
