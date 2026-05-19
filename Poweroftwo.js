function poweroftwo(n) {
  if (n == 1) return true;
  else if (n % 2 !== 0 || n < 1) {
    return false;
  }
  return poweroftwo(n / 2);
}
console.log(poweroftwo(64));
