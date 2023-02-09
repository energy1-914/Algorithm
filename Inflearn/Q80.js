// 수들의 조합
function solution(nums, k, m) {
  let answer = 0;
  let tmp = Array(k).fill(0);
  let length = nums.length;

  function DFS(L, s) {
    if (L === k) {
      let sum = tmp.reduce((a, b) => a + b, 0);
      if (sum % m === 0) answer++;
    } 
    else {
      for (let i = s; i < length; i++) {
        tmp[L] = nums[i];
        DFS(L + 1, i + 1);
      }
    }
  }
  DFS(0, 0);
  return answer;
}

console.log(solution([2, 4, 5, 8, 12], 3, 6));


function sol2(nums, k, m) {
  let answer = 0;
  let length = nums.length;

  function DFS(L, s, sum) {
    if (L === k) {
      if (sum % m === 0) answer++;
    } 
    else {
      for (let i = s; i < length; i++) {
        DFS(L + 1, i + 1, sum + nums[i]);
      }
    }
  }
  DFS(0, 0, 0);
  return answer;
}

console.log(sol2([2, 4, 5, 8, 12], 3, 6));
