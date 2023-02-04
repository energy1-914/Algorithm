// 삽입정렬***
function solution(nums) {

  for (let i = 0; i < nums.length - 1; i++) {
    let key = i + 1;
    for (let j = i; j >= 0; j--) {
      if (nums[key] < nums[j]) {
        [nums[key], nums[j]] = [nums[j], nums[key]];
        key--;
      }
      else break;
    }
  }
  return nums;
}
// console.log(solution([2, 8, 3, 6, 1, 7, 5, 9])) // [1, 2, 3, 5, 6, 7, 8, 9]
// console.log(solution([7, 6, 10, 9, 8])) // [6, 7, 8, 9, 10]

function sol2(nums) {
  let n = nums.length;

  for (let i = 1; i < n; i++) {
    let tmp = nums[i];
    let j;
    for (j = i - 1; j >= 0; j--) {
      if (nums[j] > tmp) nums[j+1] = nums[j];
      else break;
    }
    nums[j + 1] = tmp;
  }
  return nums;
}

console.log(sol2([2, 8, 3, 6, 1, 7, 5, 9])) // [1, 2, 3, 5, 6, 7, 8, 9]
console.log(sol2([7, 6, 10, 9, 8])) // [6, 7, 8, 9, 10]
