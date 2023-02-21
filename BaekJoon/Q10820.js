let input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .split("\n");
let answer = "";
for (let x of input) {
  let arr = [0, 0, 0, 0];
  if (x === "") continue;
  let word = x.split("");
  for (let y of word) {
    let ascii = y.charCodeAt();
    if (ascii >= 97 && ascii <= 122) arr[0]++;
    if (ascii >= 65 && ascii <= 90) arr[1]++;
    if (ascii >= 48 && ascii <= 57) arr[2]++;
    if (ascii === 32) arr[3]++;
  }
  answer += arr.join(' ') + '\n'
}
console.log(answer.trim());
