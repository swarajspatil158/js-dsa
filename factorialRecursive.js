function factorialRecursive(num) {
  if (num < 2) {
    return 1;
  }
  return num * factorialRecursive(num - 1);
}

console.log(factorialRecursive(0)); // 1
console.log(factorialRecursive(1)); // 1
console.log(factorialRecursive(5)); // 120
console.log(factorialRecursive(7)); // 5040
