//자릿수의 합
function solution(nums) {
  let obj = {};
  let max = 0;
  let answer = [];
  for (let x of nums) {
    let sum = 0;
    let word = x.toString().split("");
    for (let w of word) {
      w = parseInt(w);
      sum += w;
    }
    obj[x] = sum;
  }
  for (let value of Object.values(obj)) {
    max = Math.max(value, max);
    for (let key of Object.keys(obj)) {
      if (obj[key] === max) {
        answer.push(key);
      }
    }
  }
  if (answer.length > 1) {
    return Math.max(...answer);
  }
}
// console.log(solution([128, 460, 603, 40, 521, 137, 123]));

// sol2
function sol2(nums) {
  let max = 0;
  let answer = 0;
  for (let x of nums) {
    let sum = 0;
    let tmp = x;
    while (tmp) {
      sum += tmp % 10;
      tmp = parseInt(tmp / 10);
    }
    if (sum > max) {
      max = sum;
      answer = x;
    } else if (sum === max) {
      if (answer < x) answer = x;
    }
  }
  return answer;
}

console.log(sol2([128, 460, 603, , 173, 40, 521, 137, 123]));
