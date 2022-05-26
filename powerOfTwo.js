// Big-O = O(log(n))
function powerOfTwo(num) {
  if (num < 1) {
    return false;
  }
  let result = 1;
  while (result < num) {
    result *= 2;
  }
  if (result > num) {
    return false;
  } else {
    return true;
  }
}

// Big-O = O(log(n))
function powerOfTwoAnother(num) {
  if (num < 1) {
    return false;
  }
  while (num > 1) {
    if (num % 2 !== 0) {
      return false;
    }
    num = num / 2;
  }
  return true;
}

// Big-O = O(1)
function powerOfTwoBitwise(num) {
  if (num < 1) {
    return false;
  }
  if ((num & (num - 1)) === 0) {
    return true;
  } else {
    return false;
  }
  // OR return n & (n-1)
}

console.log(powerOfTwo(1)); // true
console.log(powerOfTwoAnother(2)); // true
console.log(powerOfTwoBitwise(5)); // false
