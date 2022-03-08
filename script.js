// Range function
const range = function (start, end) {
  let arr = [];

  for (let i = start; i <= end; i++) {
    arr.push(i);
  }
  return arr;
};

// Sum function
const sum = function sum(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};

console.log(sum(range(1, 4)));

// range function with 3 arguments
const rangePlus = function (start, end, increment) {
  var result = [];

  if (increment == undefined) increment = 1;

  let numLoops = Math.abs((end - start) / increment) + 1;

  for (var i = 1; i < numLoops; i++) {
    result.push(start);

    start += increment;
  }

  return result;
};

console.log(rangePlus(1, 9, 2));

// Reversing
const reversing = function (arr) {
  let newArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  return newArr;
};

console.log(reversing([1, 2, 3, 2, 3]));
