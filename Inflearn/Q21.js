//보이는 학생. nums에 일렬로 선 학생의 키가 앞에서부터 차례대로 주어지면 선생님이 볼 수 있는 학생수를 반환.
function solution(nums) {
  let answer = 0;
  let maxNum = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < nums.length; i++) {
    if (maxNum < nums[i]) {
      answer++;
      maxNum = nums[i];
    }
  }
  return answer;
}

console.log(solution([130, 135, 148, 140, 145, 150, 150, 153])) // 5
console.log(solution([1, 2, 3, 4, 5])) // 5
console.log(solution([5, 4, 3, 2, 1])) // 1
console.log(solution([7, 7, 7, 7, 7, 7])) // 1
console.log(solution([7, 7, 7, 9, 9, 9, 12])) // 3
console.log(solution([7, 7, 7, 6, 9, 8, 1, 123])) // 3



