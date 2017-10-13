function isEven (n) {
  var result = false;

  if (n < 0) return result;

  console.log(n); // See how it progress

  if (n == 0) result = true;
  else if (n == 1) result = false;
  else isEven(n-2);

  return result;
}

console.log(isEven(-1));
