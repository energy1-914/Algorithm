// 가장 높은 증가수열. 증가수열의 높이:증가수열의 첫항 - 마지막항. nums에 수열이 주어지면 여러 증가수열 중 가장 높은 부분증가수열의 높이를 반환
function solution(nums) {
  let height = 0;
  let arr = [];

  for (let i = 0; i < nums.length - 1; i++) {
    if (i === (nums.length - 2) && nums[i] < nums[i+1]) {
      height += nums[i+1] - nums[i];
      arr.push(height);
    }
    else if (nums[i] < nums[i+1]) height += nums[i+1] - nums[i];

    else {
      arr.push(height); 
      height = 0;
    }
  }

  return Math.max(...arr);
}

console.log(solution2([8, 12, 2, 3, 7, 6, 12, 20, 3])) // 14
console.log(solution2([5, 2, 4, 7, 7, 3, 9, 10, 11])) // 8

//sol2
function solution2(nums) {
  let height = 0;
  let diff = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] < nums[i+1]) diff += nums[i+1] - nums[i];
    else {
      if (height < diff) height = diff;
      diff = 0;
    }
  }
  if (height < diff) height = diff;

  return height;
}