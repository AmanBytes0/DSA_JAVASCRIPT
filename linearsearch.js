let arr = [3, 4, 5, 6, 7, 8, 9];
function linearsearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == target) {
      return i + 1;
    }
  }
  return -1;
}
console.log(linearsearch(arr, 4));
