let [m, ...nums] = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");
let n = +m.split(" ")[1];
nums = nums.map(x => +x);
let answer;

function solution(n, nums) {
  let lt = 1;
  let rt = Math.max(...nums);
  while (lt <= rt) {
    let cnt = 0;
    let midNum = parseInt((lt + rt) / 2);
    for (let x of nums) {
      cnt += parseInt(x / midNum);
    }
    if (cnt >= n) {
      answer = midNum;
      lt = midNum + 1;
    } else rt = midNum - 1;
  }
  return answer;
}

console.log(solution(n, nums));
