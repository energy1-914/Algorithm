function solution(n) {
  let answer = "수박".repeat(n / 2) + (n % 2 === 1 ? "수" : "");
  return answer;
}
