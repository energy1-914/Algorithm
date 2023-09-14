// 관계 그래프를 만든다.
// 정점과 연결된 모든 정점을 담는 양방향 관계 그래프를 완성
// 1번 정점부터 출발해서 1번 정점과 연결된 모든 정점을 큐에 담는다.
// 큐를 돌면서 해당 정점과 연결된 정점을 모두 큐에 담는 것을 반복한다
// while문을 빠져나오면 count 증가
// 모든 정점을 도는 포문이 끝나면 count 값 리턴
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
let check = Array(n + 1).fill(0);
let count = 0;
let relation = Array.from(Array(n + 1), () => Array());
for (let x of graph) {
  relation[x[0]].push(x[1]);
  relation[x[1]].push(x[0]);
}
for (let i = 1; i <= n; i++) {
  if (check[i] === 0) {
    let queue = [i];
    check[i] = 1;
    while (queue.length) {
      let target = queue.shift();
      for (let x of relation[target]) {
        if (check[x] === 0) {
          queue.push(x);
          check[x] = 1;
        }
      }
    }
    count++;
  }
}
console.log(count);
