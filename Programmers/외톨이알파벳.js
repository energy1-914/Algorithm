function solution(input_string) {
  let answer = [];
  let temp = [];
  for (let x of input_string) {
    if (temp.length === 0) {
      temp.push(x);
    } else if (temp[temp.length - 1] !== x) {
      temp.push(x);
    }
  }
  while (temp.length) {
    let target = temp.shift();
    if (temp.includes(target) && !answer.includes(target)) {
      answer.push(target);
    }
  }
  answer.length ? (answer = answer.sort().join("")) : (answer = "N");
  return answer;
}
