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
