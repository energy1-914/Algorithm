function solution(s, e) {
  let answer = 0;
  let ch = Array(10001).fill(0); // 체크배열
  let dis = Array(10001).fill(0); // 레벨
  let queue = [];
  ch[s] = 1;
  queue.push(s);
  while (queue.length) {
    let x = queue.shift();
    for (let nx of [x - 1, x + 1, x + 5]) {
      if (nx === e) return answer = dis[x] + 1;
      if (nx > 0 && nx < 10001 && ch[nx] === 0) {
        ch[nx] = 1;
        dis[nx] = dis[x] + 1;
        queue.push(nx);
      }
    }
  }
  return answer;
}
console.log(solution(5, 14))
console.log(solution(8, 3))
