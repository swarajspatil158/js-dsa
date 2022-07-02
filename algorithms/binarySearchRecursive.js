// Big-O = O(log(n))

function binary(arr, target, start, end) {
  if (start > end) {
    return "not found";
  }
  let mid = Math.floor((start + end) / 2);
  if (arr[mid] === target) {
    return `found at ${mid}`;
  }
  if (arr[mid] < target) {
    return binary(arr, target, mid + 1, end);
  }
  if (arr[mid] > target) {
    return binary(arr, target, start, mid - 1);
  }
  return binary(arr, target, start, end);
}

const arr = [1, 2, 3, 4, 5, 6, 7];
const target = 6;
let start = 0;
let end = arr.length - 1;
console.log(binary(arr, 2, start, end));
console.log(binary(arr, 7, start, end));
