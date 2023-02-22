//멘토링
let group = [];
let tmp = [];
let input = [1, 2, 3, 4];
let n = input.length;
let ch = Array(n + 1).fill(0);

function DFS(L) {
  if (L === 2) {
    group.push(tmp.slice());
  } else {
    for (let x of input) {
      if (ch[x] === 0) {
        ch[x] = 1;
        tmp.push(x);
        DFS(L + 1);
        tmp.pop();
        ch[x] = 0;
      }
    }
  }
  return group;
}

function solution(arr) {
  let answer = 0;
  let group = DFS(0);
  for (let g of group) {
    let flag = true;
    for (let x of arr) {
      if (x.indexOf(g[0]) > x.indexOf(g[1])) {
        flag = false;
      }
    }
    if (flag) answer++;
  }
  return answer;
}

console.log(
  solution([
    [3, 4, 1, 2],
    [4, 3, 2, 1],
    [3, 1, 4, 2],
  ])
);
