//타겟 넘버
function solution(numbers, target) {
  let n = numbers.length;
  let cnt = 0;
  function DFS(L, sum, s) {
    if (L === n) {
      if (sum === target) cnt++;
    }
    for (let i = s; i < n; i++) {
      DFS(L + 1, sum + numbers[i], i + 1);
      DFS(L + 1, sum - numbers[i], i + 1);
    }
  }
  DFS(0, 0, 0);
  return cnt;
}
console.log(solution([1, 1, 1, 1, 1], 3)); // 5
console.log(solution([4, 1, 2, 1], 4)); // 2
