let [n, ...input] = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");
let arr = input.map(x => x.split(" "));
arr = arr.sort((a, b) => {
  if (a[1] === b[1] && a[2] === b[2] && a[3] === b[3]) {
    // 국 영 수 점수 모두 같을 때
    if (a[0] < b[0]) {
      // 음수를 반환하면 a의 우선순위가 높다
      return -1;
    } else if (a[0] > b[0]) {
      // 양수를 반환하면 b의 우선순위가 높다
      return 1;
    } else {
      return 0;
    }
  }
  if (a[1] === b[1] && a[2] === b[2] && a[3] !== b[3]) return b[3] - a[3]; // 국 영 점수 같고 수학 점수 다를때
  if (a[1] === b[1] && a[2] !== b[2]) return a[2] - b[2]; // 국어만 같고 영어 점수 다를때
  if (a[1] !== b[1]) return b[1] - a[1];
});

let answer = [];
for (let x of arr) {
  answer += x[0] + '\n';
}
console.log(answer);
