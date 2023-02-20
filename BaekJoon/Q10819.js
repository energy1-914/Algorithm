let [n, nums] = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");
n = +n;
nums = nums.split(" ").map(x => +x);
let arr = [];
let answer = 0;
let ch = Array(n + 1).fill(0);

function sum(array) {
  let sum = 0;
  for (let i = 0; i < array.length - 1; i++) {
    sum += Math.abs(array[i] - array[i + 1]);
  }
  return sum;
}

function DFS(L) {
  if (L === n) {
    answer = Math.max(answer, sum(arr));
  } else {
    for (let i = 0; i < n; i++) {
      if (ch[i] === 0) {
        ch[i] = 1;
        arr.push(nums[i]);
        DFS(L + 1);
        ch[i] = 0;
        arr.pop();
      }
    }
  }
}
DFS(0);
console.log(answer);
