const binArr = [1, 0, 1, 0, 1, 1, 1, 1, 1, 1];

function binToDecimal2(array) {
  return parseInt(array.join(""), 2);
}

// another solution
function binToDecimal(array) {
  let len = array.length;
  let sum = 0;

  for (let i = 0; i < len; i++) {
    sum += array[len - 1 - i] * Math.pow(2, i);
  }
  return sum;
}

console.log(binToDecimal(binArr));
console.log(binToDecimal2(binArr));
