let [n, ...input] = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");
n = parseInt(n);
let arr = input.map(x => x.split(" ").map(x => +x));
arr.sort((a, b) => {
  if (a[0] === b[0]) {
    return a[1] - b[1];
  } else {
    return a[0] - b[0];
  }
});
let answer = '';
for (let x of arr) {
  answer += x[0] + ' ' + x[1] + '\n';
}
console.log(answer)