function longest(s1, s2) {
  let array = [];
  for (letter of s1) {
    if (!/^[a-zA-Z]+$/.test(letter)) continue;
    !array.includes(letter) && array.push(letter);
  }
  for (letter of s2) {
    if (!/^[a-zA-Z]+$/.test(letter)) continue;
    !array.includes(letter) && array.push(letter);
  }

  return array.sort().join("");
}

console.log(longest("xyaabbbccccdefww", "xxxxyyyyabklmopq"));
