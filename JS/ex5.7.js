function shortestWords(str) {
  return str
    .split(" ")
    .reduce((short, long) => (long.length < short.length ? long : short))
    .length;
}

console.log(shortestWords("Have a nice day"));
