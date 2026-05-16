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

// let arr = [7, 3, 1, 4, 5, 6, 0];
// function findmaxprofit(arr) {
//   let maxprofit = 0;
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       let profit = arr[j] - arr[i];
//       if (profit > maxprofit) {
//         maxprofit = profit;
//       }
//     }
//   }
//   return maxprofit;
// }
// console.log(findmaxprofit(arr));
