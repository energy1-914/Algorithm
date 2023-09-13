// 단지번호붙이기
let [n, ...graph] = require("fs")
  .readFileSync("example.txt")
  .toString()
  .split("\n");
n = +n;
graph = graph.map(x => x.split("").map(y => +y));
let answer = [];
let direction = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (graph[i][j] === 1) {
      graph[i][j] = 0;
      BFS(i, j);
    }
  }
}
function BFS(i, j) {
  let queue = [[i, j]];
  let count = 1;
  while (queue.length) {
    let target = queue.shift();
    //포문을 돌면서 상하좌우 갈 수 있는 곳은 모두 큐에 담는다.
    for (let k = 0; k < 4; k++) {
      let nx = target[0] + direction[k][0];
      let ny = target[1] + direction[k][1];
      if (nx >= 0 && nx < n && ny >= 0 && ny < n && graph[nx][ny] === 1) {
        queue.push([nx, ny]);
        // 큐에 넣은 곳 (방문 할 곳)그래프 값 0으로 변경
        graph[nx][ny] = 0;
        // 카운트 증가
        count++;
      }
    }
  }
  answer.push(count);
}
answer.sort((a, b) => a - b);
answer.unshift(answer.length);
answer.map(x => console.log(x));
