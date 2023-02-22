//졸업 선물
function solution(n, arr) {
  let group = [];
  let len = arr.length;
  let ch = Array(len).fill(0);
  let tmp = [];
  let answer = 0;
  function DFS(L, size, s) {
    if (L === size) {
      group.push(tmp.slice());
    } else {
      for (let i = s; i < len; i++) {
        if (ch[i] === 0 && tmp.length < size) {
          ch[i] = 1;
          tmp.push(arr[i]);
          DFS(L + 1, size, i + 1);
          ch[i] = 0;
          tmp.pop();
        }
      }
    }
  }
  for (let i = 1; i <= len; i++) {
    DFS(0, i, 0);
  }

  for (let g of group) {
    let sum = 0;
    let max = 0;
    for (let i = 0; i < g.length; i++) {
      max = Math.max(max, g[i][0]);
    }
    for (let i = 0; i < g.length; i++) {
      sum += g[i][1];
      if (g[i][0] !== max) {
        sum += g[i][0];
      }
    }
    sum += max / 2;
    if (sum <= n) {
      answer = Math.max(answer, g.length);
    }
  }
  return answer;
}

// console.log(
//   solution(28, [
//     [6, 6],
//     [2, 2],
//     [4, 3],
//     [4, 5],
//     [10, 3],
//   ])
// );

// sol2
function sol2(m, arr) {
  let answer = 0;
  let n = arr.length;
  arr.sort((a, b) => (a[0] + a[1]) - (b[0] + b[1]));

  for (let i = 0; i < n; i++) {
    if (arr[i][0] / 2 + arr[i][1] <= m) {
      let cnt = 1;
      let money = m - (arr[i][0] / 2 + arr[i][1]); // i 번째 상품을 할인해서 구매
      for (let j = 0; j < n; j++) {
        if (j !== i && arr[j][0] + arr[j][1] <= money) {
          money -= arr[j][0] + arr[j][1]; // j 번째 상품 구매
          cnt++;
        }
      }
      answer = Math.max(answer, cnt);
    }
  }
  return answer;
}
console.log(
  sol2(28, [
    [6, 6],
    [2, 2],
    [4, 3],
    [4, 5],
    [10, 3],
  ])
);
