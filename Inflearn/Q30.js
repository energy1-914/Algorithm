// 각 행의 최댓값. 
//매개변수 nums에 9행 9열짜리 2차원 배열이 주어지면 각 행의 최댓값을 배열에 저장하여 반환

function solution(nums) {
  let answer = [];
  let length = nums.length;
  let maxNum = 0;

  for (let rowIdx = 0; rowIdx < length; rowIdx++) {
    for (let colIdx = 0; colIdx < length; colIdx++) {
      if (maxNum < nums[rowIdx][colIdx]) maxNum = nums[rowIdx][colIdx];
    }
    answer.push(maxNum);
    maxNum = 0;
  }
  return answer;
}

console.log(solution([[3, 23, 85, 34, 17, 74, 25, 52, 65],
  [10, 7, 39, 42, 88, 52, 14, 72, 63],
  [87, 42, 18, 78, 53, 45, 18, 84, 53],
  [34, 28, 64, 85, 12, 16, 75, 36, 55],
  [21, 77, 45, 35, 28, 75, 90, 76, 11],
  [25, 87, 65, 15, 28, 11, 37, 28, 74],
  [65, 27, 75, 41, 7, 89, 78, 64, 39],
  [47, 47, 70, 45, 23, 65, 3, 41, 44],
  [87, 13, 82, 38, 31, 12, 29, 29, 80]])) // [85, 88, 87, 85, 90, 87, 89, 70, 87]
