// Big-O = O(1)
function isEven(number) {
  if ((number & 1) === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isEven(0)); // true
console.log(isEven(1)); // false
console.log(isEven(4)); // true
console.log(isEven(5)); // false
console.log(isEven(6)); // true
console.log(isEven(7)); // false
