// 선긋기
function solution(nums) {
  let length = nums.length;
  let answer = 0;
  
  nums.sort((a,b) => {
    if (a[0] === b[0]) return a[1] - b[1];
    else return a[0] - b[0];
  });

  for (let [x, y] of nums) {
    answer += (y-x);
  }

  for (let i = 0; i < length - 1; i++) {
    if (nums[i][0] <= nums[i+1][0] && nums[i+1][0] <= nums[i][1]) {
      answer -= (Math.min(nums[i][1], nums[i+1][1]) - nums[i+1][0]);
    }
  }

  return answer;
}

console.log(solution([[1, 3], [4, 11], [7, 10]])) // 9
console.log(solution([[5, 8], [1, 3], [6, 8], [9, 10]])) // 6