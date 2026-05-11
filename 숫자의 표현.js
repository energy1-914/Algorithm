function solution(n) {
  // 투포인터 알고리즘
  let answer = 0;

  let start = 1;
  let end = 1;
  let sum = 1;

  while (start <= n) {
    if (sum === n) {
      answer++;
      sum -= start;
      start++;
    } else if (sum < n) {
      end++;
      sum += end;
    } else {
      sum -= start;
      start++;
    }
  }
  return answer;
}
