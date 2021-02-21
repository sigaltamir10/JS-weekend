function maskify(str) {
  let newStr = "";
  str.length > 4
    ? (newStr += "#".repeat(str.length - 4) + str.slice(str.length - 4))
    : (newStr = str);
  return newStr;
}

console.log(maskify("4556364607935616"));
console.log(maskify("Skippy"));
console.log(maskify("abcd"));
console.log(maskify("1"));
