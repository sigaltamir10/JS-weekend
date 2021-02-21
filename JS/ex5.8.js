function longestWords(str) {
  const longestLength = Math.max(...str.split(" ").map((word) => word.length));
  return str.split(" ").filter((element) => element.length === longestLength);
}

console.log(longestWords("Have a nice day my dear"));
