//버블정렬
function solution(nums) {
  let len = nums.length;

  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (nums[j] > nums[j+1]) [nums[j], nums[j+1]] = [nums[j+1], nums[j]];
    }
  }
  return nums;
}

console.log(solution([2, 8, 3, 6, 1, 7, 5, 9])) // [1, 2, 3, 5, 6, 7, 8, 9]
console.log(solution([7, 6, 10, 9, 8])) // [6, 7, 8, 9, 10]
