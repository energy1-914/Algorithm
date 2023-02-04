// 최댓값 위치. 매개변수 nums에 9행 9열짜리 2차원 배열이 주어질 때, 
// 배열의 원소 중 최댓값을 찾아 그 최댓값이 몇행 몇열에 위치한 수인지 구해 위치 좌표를 배열에 저장해 반환.
// 최댓값이 여러개일 때, 행번호가 작은 것이 우선. 행번호가 같을 경우 열번호가 작은 것이 우선.

function solution(nums) {
  let [maxNum, maxRowIdx, maxColIdx] = [0, 0, 0];

  for (let rowIdx = 0; rowIdx < 9; rowIdx++) {
    for (let colIdx = 0; colIdx < 9; colIdx++) {
      if (maxNum < nums[rowIdx][colIdx]) {
        maxNum = nums[rowIdx][colIdx];
        maxRowIdx = rowIdx;
        maxColIdx = colIdx;
      }
    }
  }

  return [maxRowIdx + 1, maxColIdx + 1];
}

console.log(solution([
  [3, 23, 85, 34, 17, 74, 25, 52, 65],
  [10, 7, 39, 42, 88, 52, 14, 72, 63],
  [87, 42, 18, 78, 53, 45, 18, 84, 53],
  [34, 28, 64, 85, 12, 16, 75, 36, 55],
  [21, 77, 45, 9, 28, 75, 90, 76, 1],
  [25, 87, 65, 15, 28, 11, 37, 28, 74],
  [65, 27, 75, 41, 7, 89, 78, 64, 39],
  [47, 47, 70, 45, 23, 90, 3, 41, 44],
  [87, 13, 82, 38, 31, 12, 29, 29, 80]
  ])) // [5, 7]