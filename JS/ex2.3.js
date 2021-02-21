function findNextSquare(parameter) {
  let mySqrt = Math.sqrt(parameter);
  return Number.isInteger(mySqrt) ? Math.pow(mySqrt + 1, 2) : -1;
}

console.log(findNextSquare(225));
