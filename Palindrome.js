let num = 121;
function palindrome(n) {
  if (n < 0) return 0;
  let digit;
  let rev = 0;
  let copy = n;
  while (n > 0) {
    digit = n % 10;
    rev = rev * 10 + digit;
    n = Math.floor(n / 10);
  }
  return rev == copy ? true : false;
}
console.log(palindrome(num));
