//수열의 경우의 수. 길이가 n인 수열이 주어지면 이 수열의 연속부분수열 중 바이토익 수열의 갯수를 반환
// peaknum 왼쪽 개수 x 오른쪽 개수
function solution(nums) {
  let peakNumbersIndex = []; 
  let answer = 0;
  
  for (let idx = 0; idx < nums.length - 2; idx++) {
    if (nums[idx] < nums[idx+1] && nums[idx+1] > nums[idx+2]) peakNumbersIndex.push(idx+1);
  }
  
  
  for (let idx of peakNumbersIndex) {
    let leftIdx = idx;
    let rightIdx = idx;
    let [leftCnt, rightCnt] = [0,0];

    while (leftIdx >= 0 && nums[leftIdx-1] < nums[leftIdx]) {
      leftIdx--;
      leftCnt++;
    } 
    while (rightIdx < nums.length - 1 && nums[rightIdx] > nums[rightIdx+1]) {
      rightIdx++;
      rightCnt++;
    }
    
    answer += leftCnt * rightCnt;
  }
  return answer;
}

console.log(solution([1, 3, 5, 2, 1, 2, 3, 4, 2, 1])) // 10
console.log(solution([1, 3, 2, 5, 7, 4, 2, 5, 3, 1])) // 7
