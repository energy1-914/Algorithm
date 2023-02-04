// 연속된 자연수의 합
// 매개변수 n이 주어지면 2개 이상의 연속된 자연수의 합이 n이 되는 경우의 수를 반환
function solution(n) {
  let baseNum = Math.ceil(n/2);
  let arr = Array.from({length:baseNum}, (v, i) => i+1);
  let sum = 0;
  let lt = 0;
  let answer = 0;
  
  for (let rt = 0; rt < baseNum; rt++) {
    sum += arr[rt];

    while (sum > n) {
      sum -= arr[lt];
      lt++;
    }

    if (sum === n) answer++;
  }

  return answer;
}
console.log(solution(15)) // 3
console.log(solution(45678)) // 7
console.log(solution(98765)) // 3
