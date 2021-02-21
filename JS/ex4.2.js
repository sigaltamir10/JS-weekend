function tribonacci(arr, n) {
  if (arr.length === 3 && arr[0] >= 0 && arr[1] >= 0 && arr[2] >= 0) {
    for (let i = 3; i < n; i++) {
      arr.push(arr[i - 1] + arr[i - 2] + arr[i - 3]);
    }
    return arr[arr.length - 1];
  } else return [];
}

console.log(tribonacci([1, 1, 1], 10));
console.log(tribonacci([0, 0, 1], 9));
