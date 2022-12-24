// 카드 가져가기
// 일렬로 놓여진 카드의 숫자가 매개변수 nums에 주어지고, 현수가 가져갈 수 있는 카드의 개수 k가 주어지면 현수가 얻을 수 있는 최대점수를 반환.
// 카드가 일렬로 놓여진 줄의 양 끝에서 카드를 가져갈 수 있다. 가져간 카드에 적혀진 숫자의 총합이 현수가 얻는 점수.
function solution(nums, k) {
  let [sum, answer] = [0, 0];
  let lt = k - 1;
  let length = nums.length;

  for (let i = 0; i < k; i++) sum += nums[i];

  for (let rt = length - 1; rt > length - k - 1; rt--) {
    sum += (nums[rt] - nums[lt]);
    answer = Math.max(answer, sum);
    lt--;
  }

  return answer;
}

console.log(solution([2, 3, 7, 1, 2, 1, 5], 4)) // 17
console.log(solution([1, 2, 3, 5, 6, 7, 1, 3, 9], 5)) // 26

//sol2 전체에서 남는것 빼기
function sol2(nums, k) {
  let length = nums.length;
  let answer = nums.reduce((a, b) => a + b, 0);
  let [sum, lt] = [0, 0];

  for (let i = 0; i < length - k; i++) sum += nums[i];
  let minSum = sum;

  for (let rt = length - k; rt < length; rt++) {
    sum += (nums[rt] - nums[lt]);
    minSum = Math.min(sum, minSum);
    lt++;
  }

  return answer - minSum;
}
console.log(sol2([2, 3, 7, 1, 2, 1, 5], 4)) // 17
console.log(sol2([1, 2, 3, 5, 6, 7, 1, 3, 9], 5)) // 26
