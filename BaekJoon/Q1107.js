let input = require("fs").readFileSync("example.txt").toString().trim().split("\n");
let target = parseInt(input[0]);
let cnt = parseInt(input[1]);
let nums = [];
if (cnt > 0) {
  nums = nums.split(" ").map(x => parseInt(x));
} 

function check(i, nums) {
  if (!nums.length) return true;
  while (i !== 0) {
    if (nums.includes(i % 10)) return false;
    else {
      i = Math.floor(i / 10);
    }
  }
  return true;
}

function solution (target, nums) {
  let answer = Math.abs(target - 100);
  for (let i = 0; i < 1000000; i++) {
    if (check(i, nums)) {      // 모두 사용가능한 숫자로 이루어짐
      let num = Math.abs(target - i) + i.toString().length;
      if (num < answer) answer = num;
      else if (num > answer) continue;
    }
  }
  console.log(answer);
}
solution(target, nums);
// 1. +- 만 이용할 경우 : 타겟번호 - 100
// 2. +- 와 번호 모두 이용할 경우 : (타겟번호 - 이동한 번호) + 자릿수
