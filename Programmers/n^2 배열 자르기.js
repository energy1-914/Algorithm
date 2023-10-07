function solution(n, left, right) {
  let answer = [];
  for (let x = left; x <= right; x++) {
    let i = Math.floor(x / n);
    let j = x % n;
    answer.push(Math.max(i, j) + 1);
  }
  return answer;
}
