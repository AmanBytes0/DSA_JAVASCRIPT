let arr = [1, 2, 4, 5, 6, 7, 8];
function findlargest(arr) {
  let larget = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > larget) {
      larget = arr[i];
    }
  }
  return larget;
}
console.log(findlargest(arr));
