// 합이 같은 부분집합
function solution(nums) {
  let answer = "NO";
  let n = nums.length;
  const sum = nums.reduce((a, b) => a + b, 0);
  let ch = Array(n).fill(0);
  let flag = 0;
  function DFS(L) {
    let tmp = 0;
    if (flag) return;
    if (L === n) {
      for (let i = 0; i < n; i++) {
        if (ch[i] === 1) tmp += nums[i];
      }
      if (tmp === sum / 2) {
        answer = "YES";
        flag = 1;
      }
    } else {
      for (let i = 0; i < n; i++) {
        if (ch[i] === 0) {
          ch[i] = 1;
          DFS(L + 1);
          ch[i] = 0;
          DFS(L + 1);
        }
      }
    }
  }
  DFS(0);
  return answer;
}

console.log(solution([1, 3, 5, 6, 7, 10]));
console.log(solution([1, 3, 5, 6, 7, 11]));
console.log(solution([2, 4, 7, 11, 12]));
console.log(solution([2, 4, 7, 11, 14]));

function sol2(arr) {
  let answer = "NO";
  let n = arr.length;
  let flag = 0;
  let total = arr.reduce((a, b) => a + b, 0);
  function DFS(L, sum) {
    if (flag) return;
    if (L === n) {
      if (sum === total/2) {
        answer = "YES";
        flag = 1;
      }
    }
    else {
      DFS(L + 1, sum + arr[L]);
      DFS(L + 1, sum);
    }
  }
  DFS(0, 0);
  return answer;
}

console.log(sol2([1, 3, 5, 6, 7, 10]));
console.log(sol2([1, 3, 5, 6, 7, 11]));
console.log(sol2([2, 4, 7, 11, 12]));
console.log(sol2([2, 4, 7, 11, 14]));
