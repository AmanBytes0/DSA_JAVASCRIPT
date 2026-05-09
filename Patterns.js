//12345
//1234
//123
//12
//1

let n = 5;
function pattern(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0 + 1; j <= n - i; j++) {
      row = row + j;
    }
    console.log(row);
  }
}
pattern(5);
