function solution(s) {
  let answer = [];

  for (let i = 0; i < s.length; i++) {
    let temp = s.slice(0, i);
    if (temp.includes(s[i])) {
      let lastIndex = temp.lastIndexOf(s[i]);
      answer.push(i - lastIndex);
    } else {
      answer.push(-1);
    }
  }
  return answer;
}
