function filter(arr, callback) {
  let arr2 = [];
  for (let el of arr) {
    if (callback(el)) arr2.push(el);
  }
  return arr2;
}

function forEach(arr, callback) {
  for (let el of arr) {
    callback(el);
  }
}

function map(arr, callback) {
  arr3 = [];
  for (let el of arr) {
    arr3.push(callback(el));
  }
  return arr3;
}

console.log(map([1, 2, 3, 4], (el) => el * 2));
