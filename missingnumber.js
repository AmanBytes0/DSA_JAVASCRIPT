let arr = [0, 1, 2, 3, 5];
function missingnumber(arr) {
  let n = arr.length;
  let totalsum = 0;
  let currentsum = 0;
  totalsum = (n * (n + 1)) / 2;
  for (let i = 0; i < n; i++) {
    currentsum = currentsum + arr[i];
  }
  return totalsum - currentsum;
}
console.log(missingnumber(arr));
