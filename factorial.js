// Big-O = O(n)
// 4 -> 4*3*2*1

function factorial(num) {
  if (num <= 1) {
    return 1;
  }
  let result = 1;
  while (num > 1) {
    result *= num;
    num--;
  }
  return result;
}

function factorialFor(num) {
  let result = 1;
  for (let i = 2; i <= num; i++) {
    result *= i;
  }
  return result;
}

console.log(factorialFor(0));
console.log(factorial(4));
console.log(factorialFor(5));
