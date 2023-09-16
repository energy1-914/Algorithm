let input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");
let [n, m] = input
  .shift()
  .split(" ")
  .map(x => +x);
let graph = input.map(x => x.split(" ").map(x => +x));
// 2 바이러스 / 1 벽 / 0 빈 칸
// 그래프를 돌며 벽을 세울 3개의 자리의 경우의 수를 구한다
// 3개를 골랐을때 BFS를 실행한다
// BFS는 2인 자리의 인덱스를 저장해둔 큐에서 시작한다
// 큐에서 하나씩 꺼내서 해당 자리의 상하좌우로 퍼져나간다
// while문에서 나왔을떄의 그래프의 0의 갯수를 리턴한다
// 이를 반복하며 가장 큰 값을 리턴한다

let cases = [];
let answer = 0;

function DFS() {
  if (cases.length === 3) {
    // 그래프를 카피해서 사용
    let copyGraph = [];
    for (let x of graph) {
      copyGraph.push([...x]);
    }
    answer = Math.max(answer, BFS(copyGraph));
  } else {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (graph[i][j] === 0) {
          cases.push([i, j]);
          graph[i][j] = 1;
          DFS();
          cases.pop();
          graph[i][j] = 0;
        }
      }
    }
  }
}

let direction = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

function BFS(copyGraph) {
  let queue = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (copyGraph[i][j] === 2) {
        queue.push([i, j]);
      }
    }
  }
  while (queue.length) {
    let target = queue.shift();
    for (let i = 0; i < 4; i++) {
      let nx = target[0] + direction[i][0];
      let ny = target[1] + direction[i][1];
      if (nx >= 0 && nx < n && ny >= 0 && ny < m && copyGraph[nx][ny] === 0) {
        // 바이러스의 상하좌우가 0 일 경우에 전파될 수 있으니 2로 바꿔준다
        copyGraph[nx][ny] = 2;
        // 큐에다가 해당 인덱스를 넣어준다
        queue.push([nx, ny]);
      }
    }
  }
  // 전파가 모두 끝난 후 그래프의 0의 갯수 세기
  let count = 0;
  for (let x of copyGraph) {
    count += x.filter(num => num === 0).length;
  }
  return count;
}

DFS();
console.log(answer);
