let input = require("fs").readFileSync("example.txt").toString().split(" ");

let day = parseInt(input[1]);
let arr = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
for (let i = 1; i < input[0]; i++) {
  if (i === 2) {
    day += 28;
  } else if (i === 4 || i === 6 || i === 9 || i === 11) {
    day += 30;
  } else {
    day += 31;
  }
}
for (let i = 0; i < 7; i++) {
  if (day % 7 === i) {
    console.log(arr[i]);
    return;
  }
}
