//줄다리기
function solution(fight) {
  let answer = 0;
  let relation = Array.from(Array(8), () => Array(8).fill(0));
  let ch = Array(8).fill(0); // [0,0,0,0,0,0,0,0]
  let pm = [];
  for (let x of fight) {
    relation[x[0]][x[1]] = 1;
    relation[x[1]][x[0]] = 1;
  }
  function DFS(L) {
    if (L === 7) {
      let flag = true;
      for (let i = 0; i < 6; i++) {
        if (relation[pm[i]][pm[i + 1]] === 1) {
          flag = false;
          break;
        }
      }
      if (flag) answer++;
    } else {
      for (let i = 1; i < 8; i++) {
        if (ch[i] === 0) {
          ch[i] = 1;
          pm.push(i);
          DFS(L + 1);
          ch[i] = 0;
          pm.pop();
        }
      }
    }
  }
  DFS(0);
  return answer;
}

console.log(solution([[1, 3], [5, 7], [4, 2]]));

function solution(fight) {
  let answer = 0;
  let pm = [];
  let ch = Array(8).fill(0);
  let relation = Array.from(Array(8), () => Array(8).fill(0));
  for (let x of fight) {
    relation[x[0]][x[1]] = 1;
    relation[x[1]][x[0]] = 1;
  }
  function DFS(L) {
    if (L === 7) {
      answer++;
    } else {
      for (let i = 1; i < 8; i++) {
        if (pm.length > 0 && relation[pm[pm.length - 1]][i] === 1) continue;
        if (ch[i] === 0) {
          ch[i] = 1;
          pm.push(i);
          DFS(L + 1);
          ch[i] = 0;
          pm.pop();
        }
      }
    }
  }
  DFS(0);
  return answer;
}
console.log(solution([[1, 3], [5, 7], [4, 2]]));