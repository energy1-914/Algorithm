// *** 부분수열 2 ***
// 매개변수 nums에 수열이 주어지고, m이 주어지면 부분수열의 합이 m이하인 경우의 수를 반환
function solution(nums, m) {
  let answer = 0;
  let lt = 0;
  let sum = 0;

  for (let rt = 0; rt < nums.length; rt++) {
    sum += nums[rt];

    while (sum > m) {
      sum -= nums[lt];
      lt++;
    }
    answer += rt - lt + 1;
  }

  return answer;
}

console.log(solution([1, 3, 1, 2, 3], 5)) // 10
console.log(solution([1, 1, 1, 1, 1, 1], 3)) // 15
console.log(solution([1, 1, 2, 2, 1, 2, 1, 3, 2], 5)) // 22