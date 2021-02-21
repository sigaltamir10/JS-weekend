//const numbers = [19, 5, 42, 2, 77]
const numbers = [10, 343445353, 3453445, 3453545353453];

function sumLowestNums(arr) {
  let sortedArr = arr.sort((a, b) => a - b);
  return sortedArr[0] + sortedArr[1];
}

console.log(sumLowestNums(numbers));
