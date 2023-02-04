//***최대길이 바이토닉. 매개변수 nums에 길이가 n인 수열이 주어지면 연속부분수열 중 가장 긴 바이토닉 수열을 찾아 그 길이를 반환
function solution(nums) {
  let peakNumbersIndex = []; 
  let bitonicLengths = [];

  for (let idx = 0; idx < nums.length - 2; idx++) {
    if (nums[idx] < nums[idx+1] && nums[idx+1] > nums[idx+2]) peakNumbersIndex.push(idx+1);
  }

  for (let idx of peakNumbersIndex) {
    let leftIdx = idx;
    let rightIdx = idx;
    let length = 1;

    while (leftIdx >0 && nums[leftIdx-1] < nums[leftIdx]) {
      length++;
      leftIdx--;
    }

    while (rightIdx < nums.length - 1 && nums[rightIdx] > nums[rightIdx+1]) {
      length++;
      rightIdx++;
    }

    bitonicLengths.push(length);
  }
  return Math.max(...bitonicLengths);
}

console.log(solution([1, 3, 2, 5, 7, 4, 2, 5, 1])) // 5
console.log(solution([1, 3, 2, 1, 3, 5, 7, 4, 2, 5, 4, 3, 2, 1])) // 6
