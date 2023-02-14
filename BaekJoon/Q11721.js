let input = require("fs").readFileSync("example.txt").toString().split("");

for (let i = 0; i < input.length; i+=10) {
  console.log(input.slice(i, i + 10).join(''))
}