// 이동 횟수
function solution(nums) {
  let lt = 0;
  let rt = nums.length - 1;
  let answer = 0;
  nums.sort()

  while (lt <= rt) {
    if (nums[lt] + nums[rt] <= 5) {
      answer++;
      lt++;
      rt--;
    } else {
      answer++;
      rt--;
    }
  }

  return answer;
}

console.log(solution([2, 5, 3, 4, 2, 3])) // 4
console.log(solution([2, 5, 3, 4])) // 3
console.log(solution([3, 3, 3, 3, 3])) // 5
