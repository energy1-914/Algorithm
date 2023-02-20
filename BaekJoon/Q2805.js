let [m, nums] = require('fs').readFileSync('example.txt').toString().trim().split('\n');
let n = parseInt(m.split(' ')[1]);
nums = nums.split(' ').map(x => +x);
let answer = 0;
function solution(n, nums) {
  let lt = 1;
  let rt = Math.max(...nums);
  while (lt <= rt) {
    let tree = 0;
    let midNum = parseInt((lt + rt)/2);
    for (let x of nums) {
      if (x > midNum) {
        tree += (x - midNum);
      }
    }
    if (tree >= n) {
      answer = midNum;
      lt = midNum + 1;
    } 
    else {
      rt = midNum - 1;
    }
  }
  return answer;
}
console.log(solution(n, nums));