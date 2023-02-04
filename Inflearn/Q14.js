// 빈도수가 1인 가장 큰 숫자
function solution(nums) {
  let cnt = Array(1001).fill(0);
  for (let x of nums) {
      cnt[x]++;
  }
  for (let i = 1000; i>=1; i--) {
      if (cnt[i] === 1) return i;
  }
  return -1;
}

console.log(solution([1, 1, 2, 2, 3, 4, 5, 7, 7])) // 5
console.log(solution([3, 8, 3, 3, 5, 1, 1, 1, 7, 2, 2])) // 8
 