// 이분검색  
// 시간복잡도 : O(log n)
function solution(nums, m) {
  let lt = 0;
  let rt = nums.length - 1;
  let answer = 0;
  nums.sort((a,b)=> a-b);

  while (lt <= rt) {
    let midNum = parseInt((lt + rt) / 2);
    if (nums[midNum] === m) {
      answer = midNum + 1;
      break;
    }
    else if (nums[midNum] > m) rt = midNum - 1;
    else if (nums[midNum] < m) lt = midNum + 1;
  }

  return answer;
}

console.log(solution([23, 87, 65, 12, 57, 32, 99, 81], 32)) // 3