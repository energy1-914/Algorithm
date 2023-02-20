let [m, ...nums] = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");
let k = parseInt(m.split(" ")[1]);
nums = nums.map(x => +x);
nums.sort((a, b) => a - b);
let answer = 0;
function sol(nums, k) {
  let lt = 1;
  let rt = Math.max(...nums);

  while (lt <= rt) {
    let interval = parseInt((lt + rt) / 2);
    let tmp = nums[0];
    let cnt = 1;
    for (let x of nums) {
      if (tmp + interval <= x) {
        tmp = x;
        cnt++;
      }
    }
    if (cnt >= k) {
      answer = interval;
      lt = interval + 1;
    } else {
      rt = interval - 1;
    }
  }
  return answer;
}
console.log(sol(nums, k));
