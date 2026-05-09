let arr = [0, 3, 4, 5, 7, 0, 9, 7];
function moveZero() {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 0) {
      let first = arr.shift();
      arr.push(first);
    }
  }
  console.log(arr);
}
moveZero(arr);
