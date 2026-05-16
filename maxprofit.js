let arr = [2, 3, 1, 5, 6, 7, 0, 8];
function findmaxprofit(arr) {
  let min = arr[0];
  let maxprofit = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] - min > maxprofit) {
      maxprofit = arr[i] - min;
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return maxprofit;
}
console.log(findmaxprofit(arr));
