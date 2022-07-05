// listen silent
// care race
// part trap

function anagram(one, two) {
  if (one.length !== two.length) return false;
  one = one.toLowerCase();
  two = two.toLowerCase();
  if (one === two) return false;
  one = one.split("").sort().join("");
  two = two.split("").sort().join("");
  return one === two ? true : false;
}

console.log(anagram("listan", "silent"));
