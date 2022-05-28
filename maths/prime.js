// Big-O = O(n/2)
function prime(num) {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= Math.floor(num / 2); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

// Big-O = O(sqrt(n))
function primeSqrt(num) {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(primeSqrt(1)); // false
console.log(prime(5)); // true
console.log(primeSqrt(4)); // false
