
let arr = [1, 2, 2, 3, 4, 4];

function removeduplicates(arr) {
  let newarray = [];
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) {
      newarray[j] = arr[i];
      j++;
    }
  }
  return newarray;
}
console.log(removeduplicates(arr));
