//데이터 센터
function solution(board) {
  let sum = 0;
  let minTime = 1;
  let length = board.length;

  board.forEach(array => {
    sum += array.reduce((a, b) => a + b);
  });

  function count(minTime) {
    let total = 0;
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length; j++) {
        if (minTime <= board[i][j]) {
          total += minTime;
        } else total += board[i][j];
      }
    }
    return total;
  }

  while (count(minTime) < sum / 2) {
    if (count(minTime) >= sum / 2) break;
    else minTime++;
  }

  return minTime;
}

console.log(
  solution([
    [2, 3, 1, 5, 6],
    [3, 0, 7, 4, 3],
    [8, 5, 7, 5, 6],
    [9, 6, 1, 5, 5],
    [5, 5, 8, 5, 1],
  ])
); // 3


//sol2

function solution(board) {
  let answer = 0;
  let n = board.length;
  let lt = 1,
    rt = 0,
    sum = 0;
  board.forEach(e => {
    rt = Math.max(rt, Math.max(...e));
    sum += e.reduce((a, b) => a + b);
  });
  function Count(m) {
    let cnt = 0;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (board[i][j] >= m) cnt += m;
        else cnt += board[i][j];
      }
    }
    return cnt;
  }
  while (lt <= rt) {
    let m = parseInt((lt + rt) / 2);
    if (Count(m) >= sum / 2) {
      answer = m;
      rt = m - 1;
    } else {
      lt = m + 1;
    }
  }
  return answer;
}
let arr = [
  [2, 3, 1, 5, 6],
  [3, 0, 7, 4, 3],
  [8, 5, 7, 5, 6],
  [9, 6, 1, 5, 5],
  [5, 5, 8, 5, 1],
];
console.log(solution(arr));
