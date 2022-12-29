//교환 횟수
function solution(nums) {
  let n = nums.length;
  let arr = Array(n).fill(0);

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (nums[minIndex] > nums[j]) minIndex = j;
    }
    
    if (i !== minIndex) {
      [nums[i], nums[minIndex]] = [nums[minIndex], nums[i]];
      arr[i]++;
      arr[minIndex]++;
    }
  }

  return arr;
}

console.log(solution([5, 4, 2, 1, 3])) // [1, 1, 2, 2, 2]
console.log(solution([6, 7, 8, 9, 10])) // [0, 0, 0, 0, 0]
console.log(solution([2, 1, 4, 3, 0])) // [1, 0, 1, 0, 2]
