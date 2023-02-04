function solution(m, nums) {
  let answer;
  let weight = nums.reduce((a, b) => a + b, 0);
  const length = nums.length;
  const arr = nums.sort((a, b) => a - b);

  function DFS(L) {
    if (weight <= m) {
      answer = weight;
      return;
    } else {
      weight -= arr[length - L];
      DFS(L - 1);
    }
  }
  DFS(length);
  return answer;
}
console.log(solution(259, [81, 58, 42, 33, 61]));



function sol2(m, nums) {
  let answer = Number.MIN_SAFE_INTEGER;
  let n = nums.length;
  function DFS(L, sum) {
    if (sum > m) return;
    if (L === n) {
      answer = Math.max(answer, sum);
    } else {
      DFS(L + 1, sum + nums[L]);
      DFS(L + 1, sum);
    }
  }
  DFS(0, 0);
  return answer;
}

console.log(sol2(259, [81, 58, 42, 33, 61]));
