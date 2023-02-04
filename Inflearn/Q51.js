// 카드 가져가기
// 매개변수 nums에 카드에 적힌 숫자가 주어지고, k가 주어지면 현수가 얻을 수 있는 게임의 최대 점수를 반환
function solution(nums, k) {
  let answer = 0;
  let arr = [];
  nums.sort((a,b) => b-a);

  for (let i = 0; i < nums.length; i+=2) {
    answer += nums[i+1];
    arr.push(nums[i] - nums[i+1]);
  }

  arr.sort((a,b) => b-a);
  
  for (let i = 0; i < k; i++) {
    answer += arr[i]
  }

  return answer;
}

console.log(solution([7, 8, 5, 9, 3, 1, 3, 1, 1, 9], 2)) // 25