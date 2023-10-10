// 레벨을 설정한 후 그래프를 포문으로 돌면서
// 레벨보다 해당 값이 크다면 BFS 실행해서 섬갯수 세기
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let graph = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(x => x.split(" ").map(x => +x));
let [n] = graph.shift();
let level = 0;
let max = 0;
for (let x of graph) {
  max = Math.max(max, ...x);
}
let check = Array.from(Array(n), () => Array(n).fill(false));
let direction = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];
let answer = 0;

function BFS(x, y) {
  let queue = [[x, y]];
  check[x][y] = true;
  while (queue.length) {
    let target = queue.shift();
    for (let i = 0; i < 4; i++) {
      let nx = target[0] + direction[i][0];
      let ny = target[1] + direction[i][1];
      if (nx >= 0 && nx < n && ny >= 0 && ny < n && check[nx][ny] === false) {
        if (graph[nx][ny] > level) {
          queue.push([nx, ny]);
          // 큐에 담은 곳은 다시 못가게 체크하기
          check[nx][ny] = true;
        }
      }
    }
  }
}

while (level < max) {
  // 섬 갯수 세기
  let count = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (check[i][j] === false && graph[i][j] > level) {
        BFS(i, j);
        count++;
      }
    }
  }
  answer = Math.max(answer, count);
  level++;
  check = Array.from(Array(n), () => Array(n).fill(false));
}
console.log(answer);
