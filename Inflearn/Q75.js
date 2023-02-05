// 동전교환
function solution(nums, m) {
  let answer = Number.MAX_SAFE_INTEGER;
  let length = nums.length;
  function DFS(L, sum) {
    if (sum > m) return;
    if (L >= answer) return;
    if (sum === m) answer = Math.min(answer, L);
    else {
      for (let i = 0; i < length; i++) {
        DFS(L + 1, sum + nums[i]);
      }
    }
  }
  DFS(0, 0);
  return answer;
}

console.log(solution([1, 2, 5], 15));
