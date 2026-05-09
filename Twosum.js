let arr = [12, 45, 7, 19, 23, 56, 89, 34, 67, 90, 11, 29];
let target = 100;

function twosum(arr, target) {
  let sum = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [arr[i], arr[j]];
      }
    }
  }
  return sum;
}
console.log(twosum(arr, target));
