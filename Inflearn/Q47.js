// 선택정렬
// 매개변수 nums에 배열이 주어지면 nums를 선택정렬 방법으로 오름차순 정렬하세요.

function solution(nums) {
  
  for (let i = 0; i < nums.length - 1; i++) {
    let idx = i; 
    for (let j = i + 1; j < nums.length; j++) { 
      if (nums[idx] > nums[j]) idx = j;
    }
    if (idx !== i) [nums[i], nums[idx]] = [nums[idx], nums[i]];
  }

  return nums;
}

console.log(solution([2, 8, 3, 6, 1, 7, 5, 9])) // [1, 2, 3, 5, 6, 7, 8, 9]
console.log(solution([7, 6, 10, 9, 8])) // [6, 7, 8, 9, 10]