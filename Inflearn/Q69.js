//순열 구하기
function solution(nums, m) {
  let answer = [];
  let len = nums.length;
  let checkArray = Array.from({length: len}, () => 0);
  let tmp = [];

  function DFS(L) {
    if (L === m) answer.push(tmp.slice());
    else {
      for (let i = 0; i < len; i++) {
        if (checkArray[i] === 0) {
          checkArray[i] = 1;
          tmp.push(nums[i]);
          DFS(L + 1);
          tmp.pop();
          checkArray[i] = 0;
        }
      }
    }
  }
  DFS(0);
  return answer;
}

console.log(solution([3, 6, 9], 2))
