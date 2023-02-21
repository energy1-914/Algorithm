let input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("");
let count = {};
let alphabet = "abcdefghijklmnopqrstuvwxyz";
alphabet = alphabet.split("");
for (let x of alphabet) {
  count[x] = 0;
}
for (let x of input) {
  for (let key of Object.keys(count)) {
    if (key === x) {
      count[key]++;
    }
  }
}
let answer = "";
for (let x of Object.values(count)) {
  answer += x + " ";
}
console.log(answer);
