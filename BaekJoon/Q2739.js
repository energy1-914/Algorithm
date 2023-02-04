// let input = require('fs').readFileSync('/dev/stdin').toString().trim();
let input = require("fs").readFileSync("example.txt").toString().trim();
for (let i = 1; i <= 9; i++) {
  console.log(`${input} * ${i} = ${input * i}`);
}
