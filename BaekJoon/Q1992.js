let [num, ...arr] = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");
let n = parseInt(num);
let board = arr.map(x => x.split("").map(x => +x));
let answer = [];

function DFS(n, x, y) {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      sum += board[x + i][y + j];
    }
  }
  if (sum === 0) answer.push(0);
  else if (sum === n * n) answer.push(1);
  else {
    n /= 2;
    answer.push("(");
    DFS(n, x, y);
    DFS(n, x, y + n);
    DFS(n, x + n, y);
    DFS(n, x + n, y + n);
    answer.push(")");
  }
}
DFS(n, 0, 0);
console.log(answer.join(''));
