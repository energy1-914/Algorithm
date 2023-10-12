function solution(s) {
  s = JSON.parse(s.replace(/{/g, "[").replace(/}/g, "]"));
  s.sort((a, b) => a.length - b.length);
  let answer = [...s[0]];
  for (let i = 1; i < s.length; i++) {
    let num = s[i].filter(x => !answer.includes(x));
    answer.push(...num);
  }
  return answer;
}
