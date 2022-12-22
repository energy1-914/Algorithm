// 공주 구하기. n번째 사람이 n을 외치고, n=k인 경우 제외시킨다. 마지막 남는 사람을 출력.
function solution(n, k) {
  let queue = [];
  let count = 0;

  for (let i = 1; i < n+1; i++) {
    queue.push(i);
  }

  while (queue.length !== 1) {
    count++;
    if (count === k) {
      queue = queue.slice(1);
      count = 1;
    }
    queue.push(queue[0]);
    queue.shift(queue[0]);
  }
  return queue[0];
}

console.log(solution(8, 3)) // 7
