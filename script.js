// Minimum
const min = function (x, y) {
  if (x > y) return y;
  if (x < y) return x;
};

console.log(min(2, 5));

//Bean Counting
function countBs(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === "B") {
      count++;
    }
  }
  return count;
}

console.log(countBs("ABCACBBCBA"));

const countChart = function (str, char) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === char) {
      count++;
    }
  }
  return count;
};

console.log(countChart("ABCACBBCBA", "A"));
