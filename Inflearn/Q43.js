// ***부분수열 1***(다출제) 
// 매개변수 nums에 수열이 주어지고, m이 주어지면 부분수열의 합이 m이 되는 경우의 수를 반환하라
// ** two pointers algorithm
function solution(nums, m) {
  let answer = 0;
  let lt = 0, sum = 0;

  for (let rt = 0; rt < nums.length; rt++) {
    sum += nums[rt];

    while (sum > m) {
      sum -= nums[lt];
      lt++;
    }
    
    if (sum === m) answer++;
  }

  return answer;
}

console.log(solution([1, 2, 1, 3, 1, 1, 1, 2], 6)) // 3
console.log(solution([1, 1, 1, 1, 1, 1, 3], 3)) // 5
console.log(solution([1, 2, 1, 2, 1, 2, 1], 3)) // 6
