let input = require("fs").readFileSync("example.txt").toString().trim();
let n = parseInt(input);
let answer = [];
let cnt = 0;
function DFS(n, from, other, to) {
  if (n === 0) return;
  else {
    DFS(n - 1, from, to, other);
    cnt++;
    answer.push([from, to]);
    DFS(n - 1, other, from, to);
  }
}
DFS(n, '1', '2', '3')
console.log(cnt);
console.log(answer.map(x => x.join(' ')).join('\n'))
