// 바이토닉 수열(^) 길이가 n인 수열이 매개변수 nums에 주어지면 이 수열이 바이토닉 수열인지 판별하여 yes/no 반환.
// [1, 2, 3, 4, 2, 1]이면 바이토닉 수열. [1, 2, 2, 3, 2, 1]과 같이 같은 값이 연속으로 있으면 바아토닉 수열이 아님.

function solution(nums) {
  let i = 0;
  const length = nums.length;

  while (nums[i] < nums[i+1] && i < length - 1) i++;
  if (i === 0 || i === length - 1) return 'NO'; 
  while (nums[i] > nums[i+1] && i < length - 1) i++;
  if (nums[i] === nums[i+1] || nums[i] < nums[i+1]) return 'NO';
  if (i !== length - 1) return 'NO';
  return 'YES';
}

console.log(solution([1, 2, 3, 4, 5, 3, 1])) // YES
console.log(solution([1, 3, 4, 5, 5, 6, 4, 3])) // NO
console.log(solution([1, 2, 3, 4, 5])) // NO
console.log(solution([1, 2, 3, 1, 5])) // NO
