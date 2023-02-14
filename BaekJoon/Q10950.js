// let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let input = require("fs").readFileSync("example.txt").toString().split("\n");

for (let i = 0; i < parseInt(input[0]); i++) {
  let a = input[i + 1].split(" ");
  console.log(parseInt(a[0]) + parseInt(a[1]));
}