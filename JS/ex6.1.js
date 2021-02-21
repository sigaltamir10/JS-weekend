function accum(str) {
  if (!/^[a-zA-Z]+$/.test(str))
    return "illegal input - only letters are allowed";
  const arr = str.toUpperCase().split("");
  for (let i = 0, x = 1; i < str.length; i++, x++) {
    arr[i] = arr[i].repeat(x);
    arr[i] = arr[i][0] + arr[i].slice(1).toLowerCase();
  }
  return arr.join("-");
}

console.log(accum("hi100"));
console.log(accum("abcd"));
console.log(accum("RqaEzty"));
console.log(accum("cwAt"));
