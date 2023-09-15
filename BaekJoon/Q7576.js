// 토마토
// 주어진 배열을 탐색해서 1인 값의 인덱스와 레벨[i,j,0]을 큐에 저장시킨다 (스타트 포인트들)
// 큐에서 하나씩 꺼내서 상하좌우의 값이 0 이면 1로 바꾸고 큐에 레벨과 함께 넣기
// 만약 while문을 빠져나왔는데 배열에 0 이 있다면 -1 출력하기
// 레벨 출력
// shift 메소드때문에 시간초과가 난다.
// index를 이용해야 시간초과가 안남

let input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");
let [m, n] = input
  .shift()
  .split(" ")
  .map(x => +x);
let graph = input.map(x => x.split(" ").map(x => +x));
let queue = [];

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (graph[i][j] === 1) {
      queue.push([i, j, 0]);
    }
  }
}
let direction = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];
let answer = 0;
let index = 0;
while (queue.length !== index) {
  let target = queue[index];
  answer = target[2];
  for (let x of direction) {
    let nx = target[0] + x[0];
    let ny = target[1] + x[1];
    let nl = target[2] + 1;
    if (nx >= 0 && nx < n && ny >= 0 && ny < m && graph[nx][ny] === 0) {
      queue.push([nx, ny, nl]);
      graph[nx][ny] = 1;
    }
  }
  index++;
}
for (let x of graph) {
  if (x.includes(0)) {
    console.log(-1);
    return;
  }
}
console.log(answer);
