function isogram(str) {
  if (!/^[a-zA-Z]+$/.test(str))
    return "illegal input - only letters are allowed";
  let obj = {};
  for (let letter of str.toLowerCase()) {
    obj[letter] ? (obj[letter] += 1) : (obj[letter] = 1);
  }
  return Object.values(obj).find((value) => value > 1) == undefined;
}

console.log(isogram("Dermatoglyphics"));
console.log(isogram("aba"));
console.log(isogram("mMOse"));
