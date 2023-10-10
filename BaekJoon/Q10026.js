const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(x => x.split(""));
let graph = input.slice(1);
let n = graph.length;
let colorBlindGraph = Array.from(Array(n), () => Array(n).fill(0));
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (graph[i][j] === "B") {
      colorBlindGraph[i][j] = "B";
    } else colorBlindGraph[i][j] = "RG";
  }
}
let normalCount = 0;
let colorBlindCount = 0;
let direction = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

function BFS(color, x, y, targetGraph) {
  let queue = [[x, y]];
  targetGraph[x][y] = 0;
  while (queue.length) {
    let target = queue.shift();
    for (let i = 0; i < 4; i++) {
      let nx = target[0] + direction[i][0];
      let ny = target[1] + direction[i][1];
      if (
        nx >= 0 &&
        nx < n &&
        ny >= 0 &&
        ny < n &&
        targetGraph[nx][ny] !== 0
      ) {
        if (targetGraph[nx][ny] === color) {
          queue.push([nx, ny]);
          targetGraph[nx][ny] = 0;
        }
      }
    }
  }
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (graph[i][j] !== 0) {
      BFS(graph[i][j], i, j, graph);
      normalCount++;
    }
    if (colorBlindGraph[i][j] !== 0) {
      BFS(colorBlindGraph[i][j], i, j, colorBlindGraph);
      colorBlindCount++;
    }
  }
}
console.log(`${normalCount} ${colorBlindCount}`);
