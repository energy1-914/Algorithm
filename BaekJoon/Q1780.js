let [n, ...arr] = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");
let board = arr.map(x => x.split(" ").map(x => parseInt(x)));

function solution(n) {
  let answer = [0, 0, 0]; // -1 0 1의 갯수
  function DFS(n, x, y) {
    let num = board[x][y];
    let cnt = 0;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (board[x + i][y + j] === num) cnt++;
        else break;
      }
    }
    if (cnt === n * n) answer[num + 1]++;
    else {
      n /= 3;
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          DFS(n, x + i * n, y + j * n);
        }
      }
    }
  }
  DFS(n, 0, 0);
  console.log(answer.join("\n"));
}

solution(n);
