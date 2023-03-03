//게임 맵 최단거리
// BFS 사용
function solution(maps) {
  let n = maps.length;
  let m = maps[0].length;
  let dx = [0, 1, 0, -1];
  let dy = [-1, 0, 1, 0];
  let queue = [];
  queue.push([0, 0, 1]);
  let ch = Array.from(Array(n), () => Array(m).fill(0));
  ch[0][0] = 1;
  while (queue.length) {
      let [x, y, cnt] = queue.shift();
      for (let i = 0; i < 4; i++) {
        let nx = x + dx[i];
        let ny = y + dy[i];
        if (nx === n - 1 && ny === m - 1) return cnt + 1;
        if (
          nx >= 0 &&
          nx < n &&
          ny >= 0 &&
          ny < m &&
          maps[nx][ny] === 1 &&
          ch[nx][ny] === 0
        ) {
          queue.push([nx, ny, cnt + 1]);
          ch[nx][ny] = 1;
        }
      }
  }
  return -1;
}

console.log(solution([[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,1],[0,0,0,0,1]]))


//DFS : 테케는 통과되지만 효율성검사 통과안됨
function solution(maps) {
  let n = maps.length;
  let m = maps[0].length;
  let answer = Number.MAX_SAFE_INTEGER;
  let dx = [0, 1, 0, -1];
  let dy = [1, 0, -1, 0];
  let ch = Array.from(Array(n), () => Array(m).fill(0));
  ch[0][0] = 1;
  function DFS(L, x, y) {
    if (x === n - 1 && y === m - 1) {
      answer = Math.min(answer, L);
      return;
    }
    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];
      if (
        nx >= 0 &&
        nx < n &&
        ny >= 0 &&
        ny < m &&
        maps[nx][ny] === 1 &&
        ch[nx][ny] === 0
      ) {
        ch[nx][ny] = 1;
        DFS(L + 1, nx, ny);
        ch[nx][ny] = 0;
      }
    }
  }
  DFS(1, 0, 0);
  if (answer > n * m) answer = -1;
  return answer;
}
