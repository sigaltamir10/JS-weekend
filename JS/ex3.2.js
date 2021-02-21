function peopleOnBus(arr) {
  let peopleOn = 0;

  for (let [peopleIn, peopleOut] of arr) {
    peopleOn += peopleIn - peopleOut;
  }
  return peopleOn;
}

console.log(
  peopleOnBus([
    [5, 0],
    [7, 2],
    [9, 5],
    [0, 6],
    [10, 3],
    [0, 10],
  ])
);
