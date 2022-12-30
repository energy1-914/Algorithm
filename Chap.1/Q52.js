// 이동한 숫자
function solution(nums) {
  let length = nums.length;
  let answer = Array(length - 1).fill(0);

  for (let i = 1; i < length; i++) {
    let tmp = nums[i];
    let j;
    for (j = i - 1; j >= 0; j--) {
      if (nums[j] > tmp) {
        nums[j+1] = nums[j];
        answer[i-1]++; 
      }
      else break;
    }
    nums[j+1] = tmp;
  }
  
  return answer;
}

console.log(solution([5, 4, 2, 1, 3])) // [1, 2, 3, 2]
console.log(solution([6, 7, 8, 9, 10])) // [0, 0, 0, 0]