//체육복
function solution(n, lost, reserve) {
  let answer = 0;
  let rel = {};
  lost.sort();
  reserve.sort();
  for (let i = 1; i <= n; i++) {
    if (lost.includes(i) && reserve.includes(i)) {
      rel[i] = 1;
    } else if (lost.includes(i)) {
      rel[i] = 0;
    } else if (reserve.includes(i)) {
      rel[i] = 2;
    } else {
      rel[i] = 1;
    }
  }
  for (let x of lost) {
    if (rel[x - 1] === 2) {
      rel[x - 1] = 1;
      rel[x] = 1;
    } else if (rel[x + 1] === 2 && rel[x] === 0) {
      rel[x + 1] = 1;
      rel[x] = 1;
    }
  }
  for (let i = 1; i <= n; i++) {
    if (rel[i] >= 1) answer++;
  }
  return answer;
}
