let input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split(" ");
let a = parseInt(input[0] + input[1]);
let b = parseInt(input[2] + input[3]);
console.log(a + b);
