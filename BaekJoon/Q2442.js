let input = require("fs").readFileSync("example.txt").toString();
let n = parseInt(input);
let answer = "";

for (let i = 1; i <= n; i++) {
  let arr = Array(n - i).fill(" ");
  for (let j = 1; j <= 2 * i - 1; j++) {
    arr.push("*");
  }
  answer += arr.join("") + "\n";
  arr = [];
}

console.log(answer);
