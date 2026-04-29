// 그리디
function solution(A, B) {
  // A는 오름차순
  // B는 내림차순 정렬 후
  // 작은값 * 큰값
  // 큰값 * 작은값
  // 형태로 계산해야 최소값 나옴
  var answer = 0;
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);

  A.map((n, i) => (answer += n * B[i]));

  return answer;
}
