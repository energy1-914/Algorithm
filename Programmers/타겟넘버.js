function solution(numbers, target) {
  let count = 0;
  function DFS(L, sum) {
    if (L === numbers.length) {
      if (sum === target) count++;
    } else {
      DFS(L + 1, sum + numbers[L]);
      DFS(L + 1, sum - numbers[L]);
    }
  }
  DFS(0, 0);
  return count;
}
