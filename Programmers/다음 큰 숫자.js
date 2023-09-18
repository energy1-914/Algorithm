// 우선 주어진 n을 toString(2)를 통해서 2진수로 변환한다.
// while문을 돌면서 target = n++ 로 정의해서
// n보다 큰 수들 중 하나씩 2진수로 변환해가면서
// 그떄의 1의 갯수(필터로 세자)가 기존의 n의 2진수의 1의 갯수와 동일하면
// break로 while문을 탈출하고
// 아니라면 target값을 증가시켜서 다시 검사해보자
function solution(n) {
  let count = n
    .toString(2)
    .split("")
    .filter(x => x === "1").length;
  let target = n + 1;
  while (true) {
    let targetCount = target
      .toString(2)
      .split("")
      .filter(x => x === "1").length;
    if (targetCount === count) {
      return target;
    } else {
      target++;
    }
  }
}
