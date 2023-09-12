function solution(phone_book) {
  let answer = true;
  let obj = {};
  for (let x of phone_book) {
    obj[x] = 1;
  }
  for (let x in obj) {
    let temp = [];
    let nums = x.split("");
    while (temp.join("") !== x) {
      if (obj[temp.join("")]) {
        return false;
      }
      temp.push(nums.shift());
    }
  }

  return answer;
}
