// 숫자 구슬 •••

function count(nums, midNum) {
  let count = 1,
  sum = 0;
  for (let number of nums) {
    if (sum + number > midNum) {
      count++;
      sum = number;
    } else sum += number;
  }
  return count;
}

function solution(nums, m) {
  let lt = Math.max(...nums);
  let rt = nums.reduce((a, b) => a + b);
  let answer = 0;
  
  while (lt <= rt) {
    let midNum = parseInt((lt + rt) / 2);
    if (count(nums, midNum) <= m) {
      answer = midNum;
      rt = midNum - 1;
    } else {
      lt = midNum + 1;
    }
  }
  return answer;
}

console.log(solution([5, 4, 2, 6, 9, 3, 8, 7], 3)); // 17
console.log(solution([10, 20, 30, 40, 50, 60, 70], 5)); // 70
console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 3)); // 24
