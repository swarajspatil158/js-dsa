// while loop | Big-O = O(n)
function fibonacciWhileLoop(num) {
  let arr = [0, 1];
  let n1 = 0;
  let n2 = 1;
  while (num > 2) {
    let n3 = n1 + n2;
    arr.push(n3);
    n1 = n2;
    n2 = n3;
    num -= 1;
  }
  return arr;
}

// for loop | Big-O = O(n)
function fibonacciForLoop(num) {
  const fib = [0, 1];
  for (let i = 2; i < num; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}

console.log(fibonacciForLoop(2)); // [0,1]
console.log(fibonacciWhileLoop(3)); // [0,1,1]
console.log(fibonacciForLoop(7)); // [0,1,1,2,3,5,8]
