function solution(elements) {
  // 슬라이딩 윈도우 활용하기
  // 공통된 부분은 유지하고 처음과 끝만 변경해서 연산횟수를 줄인다
  let n = elements.length;
  let sum = 0;
  let cases = new Set();
  for (let i = 1; i <= n; i++) {    // i : 길이
    for (let j = 0; j < n; j++) {   // j 인덱스부터 i 길이만큼 합을 연산
      if (j === 0) {                // 처음 시작에서만 직접 더한다
        sum = elements.slice(0, j + i).reduce((a, b) => a + b);
      } else {
        sum -= elements[j - 1];
        sum += elements[(j + i - 1) % n];
      }
      cases.add(sum);
    }
  }
  return cases.size;
}
