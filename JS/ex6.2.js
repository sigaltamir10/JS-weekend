function countingDuplicates(str) {
  let obj = {};
  for (let letter of str) {
    obj[letter] ? (obj[letter] += 1) : (obj[letter] = 1);
  }

  let duplicates = Object.entries(obj).filter(([key, value]) => value > 1);
  return duplicates.length;
}

console.log(countingDuplicates("aabbbcd"));
console.log(countingDuplicates("Indivisibilities"));
console.log(countingDuplicates("indivisibility"));
