function vowels(str) {
  let vowel = ["a", "e", "i", "o", "u"];
  return str
    .toLowerCase()
    .split("")
    .reduce((acc, curr) => {
      return vowel.includes(curr) ? acc + 1 : acc;
    }, 0);
}

console.log(vowels("swaraj"));
