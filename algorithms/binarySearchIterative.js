// Big-O = O(log(n))

const arr = [1, 2, 3, 4, 5, 6, 7];
const target = 6;
function binary(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] > target) {
      end = mid - 1;
    } else if (arr[mid] === target) {
      return `found at ${mid}`;
    } else {
      start = mid + 1;
    }
  }
  return "not found";
}

console.log(binary(arr, 2));
console.log(binary(arr, 7));
