function solution(progresses, speeds) {
  let time = [];
  let answer = [];
  let n = progresses.length;
  for (let i = 0; i < n; i++) {
    let day = Math.ceil((100 - progresses[i]) / speeds[i]);
    time.push(day);
  }

  while (time.length) {
    let target = time.shift();
    let count = 1;
    while (target >= time[0]) {
      count++;
      time.shift();
    }
    answer.push(count);
  }
  return answer;
}
