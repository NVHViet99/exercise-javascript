// Looping a Triangle
let value = "#";
while (value.length < 7) {
  console.log(value);

  value = value + "#";
}

// FizzBuzz
for (let i = 0; i <= 100; i++) {
  if (i % 3 == 0) {
    console.log("frizz");
  } else if (i % 5 == 0) {
    console.log("buzz");
  } else if (i % 3 == 0 && i % 5 == 0) {
    console.log("frizzBuzz");
  } else {
    console.log(i);
  }
}

//checssBoard
const chessBoard = function (num) {
  let output = "";

  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      (i + j) % 2 == 0 ? (output += " ") : (output += "#");
    }
    output += "\n";
  }
  console.log(output);
};

chessBoard(5);
