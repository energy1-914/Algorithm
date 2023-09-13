function solution(dots) {
  // 한점을 기준으로 잡고 나머지 점 중 임의의 한 점을 잡아 기울기를 구한다.
  // 나머지 두 점의 기울기를 구한다.
  // 두 기울기가 동일하면 1을 리턴
  let answer = 0;
  let group1 = [];
  let group2 = [];
  group1.push(dots[0]);
  for (let i = 1; i < 4; i++) {
    group1.push(dots[i]);
    group2 = dots.filter(x => !group1.includes(x));
    //기울기 구하기
    let slope1 = (group1[0][1] - group1[1][1]) / (group1[0][0] - group1[1][0]);
    let slope2 = (group2[0][1] - group2[1][1]) / (group2[0][0] - group2[1][0]);
    if (slope1 === slope2) return 1;
    group1.pop();
  }
  return answer;
}
