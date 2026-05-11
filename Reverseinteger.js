let num = -345;
function reverseInteger(n) {
  let copy = n;
  n = Math.abs(n);
  let digit;
  let rev = 0;
  while (n > 0) {
    digit = n % 10;
    rev = rev * 10 + digit;
    n = Math.floor(n / 10);
  }
  return copy < 0 ? -rev : rev;
}
console.log(reverseInteger(num));
