/*
1
1 0
1 0 1
1 0 1 0
1 0 1 0 1
1 0 1 0 1 0
*/
let n = 6;
function pattern(n) {
  for (let i = 0; i < n; i++) {
    let flip = 1;
    let row = "";
    for (let j = 0; j <= i; j++) {
      row = row + flip;
      if (flip == 1) {
        flip = 0;
      } else {
        flip = 1;
      }
    }
    console.log(row);
  }
}
pattern(n);
