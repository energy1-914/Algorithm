const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(x => x.split(" ").map(x => +x));
let answer = [];
let direction = [
  [0, 1],
  [1, 1],
  [1, 0],
  [1, -1],
  [0, -1],
  [-1, -1],
  [-1, 0],
  [-1, 1],
];
let count = 0;

function BFS(x, y, board, m, n) {
  let queue = [[x, y]];
  while (queue.length) {
    let target = queue.shift();
    for (let i = 0; i < 8; i++) {
      let nx = target[0] + direction[i][0];
      let ny = target[1] + direction[i][1];
      if (nx >= 0 && nx < m && ny >= 0 && ny < n && board[nx][ny] === 1) {
        queue.push([nx, ny]);
        board[nx][ny] = 0;
      }
    }
  }
  count++;
}
input.pop();
while (input.length) {
  let [w, h] = input.shift();
  let board = [];
  count = 0;
  for (let i = 0; i < h; i++) {
    board.push(input.shift());
  }
  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if (board[i][j] === 1) {
        board[i][j] = 0;
        BFS(i, j, board, h, w);
      }
    }
  }
  answer.push(count);
}

answer.map(x => console.log(x));
