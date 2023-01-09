//마구간 정하기

function count(nums, midNum) {
  let count = 1;
  let endPoint = nums[0];
  for (let number of nums) {
    if (number - endPoint >= midNum) {
      count++;
      endPoint = number;
    }
  }
  return count;
}
function solution(nums, c) {
  nums.sort((a, b) => a - b);
  let lt = 1, rt = Math.max(...nums);
  let answer = [];

  while (lt <= rt) {
    let midNum = parseInt((lt + rt)/2);
    if (count(nums, midNum) >= c) {
      lt = midNum + 1;
      answer.push(midNum);
    } else rt = midNum - 1;
  }

  return Math.max(...answer);
}

console.log(solution([1, 2, 8, 4, 9], 3)); // 3
console.log(solution([1, 2, 8, 4, 5, 13, 9], 3)); // 5
console.log(solution([1, 3, 6, 11, 18, 27, 38, 41, 56, 73, 92, 113], 8)); // 10
