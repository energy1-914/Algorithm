function solution(priorities, location) {
  let queue = [];
  let maxNumber = Math.max(...priorities);
  let n = priorities.length;
  let answer = 0;
  for (let i = 0; i < n; i++) {
    queue.push([i, priorities[i]]);
  }
  while (true) {
    let target = queue.shift();
    if (target[1] === maxNumber) {
      let tmp = 0;
      for (let x of queue) {
        tmp = Math.max(tmp, x[1]);
      }
      maxNumber = tmp;
      answer++;
      if (target[0] === location) return answer;
    } else {
      queue.push(target);
    }
  }
}
