function solution(n) {
  let answer = 0;
  // 만약 n이 홀수이면 -1 해서 answer++ 하고
  // 만약 n이 짝수이면 n/2 까지 도달하는데 걸리는 케이스를 구한다
  // 이를 계속 반복해서 n이 0 이 되면 끝
  while (n) {
    if (n % 2) {      // 홀수인 경우
      n -= 1;
      answer++;
    } else {          // 짝수인 경우 2로 나누기
      n /= 2;
    }
  }
  return answer;
}
