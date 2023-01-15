//이진트리 순회

// 전위 순회 : 부모 - 왼쪽 - 오른쪽
function solution(v) {
  let answer;
  function DFS(v) {
    if (v > 7) return;
    else {
      console.log(v);
      DFS(v * 2);
      DFS(v * 2 + 1);
    }
  }
  DFS(v);
  return answer;
}

console.log(solution(1));

// 중위 순회 : 왼쪽 - 부모 - 오른쪽
function sol2(v) {
  let answer;
  function DFS(v) {
    if (v > 7) return;
    else {
      DFS(v * 2);
      console.log(v);
      DFS(v * 2 + 1);
    }
  }
  DFS(v);
  return answer;
}
console.log(sol2(1));


//후위 순회 : 왼쪽 - 오른쪽 - 부모
function sol3(v) {
  let answer;
  function DFS(v) {
    if (v > 7) return;
    else {
      DFS(v * 2);
      DFS(v*2+1);
      console.log(v)
    }
  }
  DFS(v);
  return answer;
}
console.log(sol3(1));
