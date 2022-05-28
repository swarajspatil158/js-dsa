// Big-O = O(2^n)
function fibonacciRecursive(num) {
  if (num === 0) {
    return 0;
  }
  if (num === 1) {
    return 1;
  }
  return fibonacciRecursive(num - 1) + fibonacciRecursive(num - 2);
}

// Big-O = O(2^n)
function fibonacciRecursiveAnother(num) {
  if (num < 2) {
    return num;
  }
  return fibonacciRecursive(num - 1) + fibonacciRecursive(num - 2);
}
console.log(fibonacciRecursive(0)); // 0
console.log(fibonacciRecursive(1)); // 1
console.log(fibonacciRecursive(6)); // 8
