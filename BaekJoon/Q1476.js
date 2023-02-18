let input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .split(" ")
  .map(x => parseInt(x));
function count(e, s, m) {
  let cnt = 1;
  while (1) {
    if ((cnt - e) % 15 === 0 && (cnt - s) % 28 === 0 && (cnt - m) % 19 === 0) {
      console.log(cnt);
      break;
    } else {
      cnt++;
    }
  }
}
count(input[0], input[1], input[2]);