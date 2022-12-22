// 공주 구하기. n번째 사람이 n을 외치고, n=k인 경우 제외시킨다. 마지막 남는 사람을 출력.
function solution(n, k) {
  let queue = Array.from({length : n}, (v, index) => index + 1);
  let count = 0;

  while (queue.length !== 1) {
    count++;
    if (count === k) {
      queue = queue.slice(1);
      count = 1;
    }
    queue.push(queue.shift());
  }
  return queue[0];
}

console.log(solution(8, 3)) // 7

function sol2(n, k){
  let answer;
  let queue = Array.from({length : n}, (v, i) => i + 1); 

  while (queue.length) {
      for (let i = 1; i < k; i++) queue.push(queue.shift());
      queue.shift();
      if (queue.length === 1) answer = queue.shift();
  }  
  return answer;
}

console.log(sol2(8, 3));