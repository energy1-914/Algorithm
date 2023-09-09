function solution(nums) {
  let answer = 0;
  let obj = {};
  let n = nums.length;
  for (let x of nums) {
    obj[x] ? obj[x]++ : (obj[x] = 1);
  }
  let len = Object.keys(obj).length;
  if (len >= n / 2) {
    answer = n / 2;
  } else {
    answer = len;
  }
  return answer;
}
