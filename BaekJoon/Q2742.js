let input = require("fs").readFileSync("example.txt").toString();
let answer = "";
for (let i = parseInt(input); i > 0; i--) {
  answer += i + "\n";
}
console.log(answer);
