// 공사비용
// 매개변수 cost에 각 구간의 공사비용 정보가 배열로 주어지고, 매개변수 m에 예산이 주어지면, 주어진 예산안에서 정상으로 만들 수 있는 가장 긴 연속 구간의 길이를 반환
function solution(cost, m) {
  let sum = 0;
  let lt = 0;
  let answer = 0; 

  for (let rt = 0; rt < cost.length; rt++) {
    sum += cost[rt];
    
    while (sum > m) {
      sum -= cost[lt];
      lt++;
    }

    answer = Math.max((rt - lt + 1), answer);
  }

  return answer;
}

console.log(solution([0, 150, 100, 0, 150, 0, 70, 140], 350)) // 5
console.log(solution([100, 200, 300, 400, 500, 100], 300)) // 2