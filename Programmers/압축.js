function solution(msg) {
  let answer = [];
  let nextIndex = 27;
  let dic = {};
  for (let i = 1; i <= 26; i++) {
    dic[String.fromCharCode(i + 64)] = i;
  }
  let words = msg.split("");
  let i = 0;
  let current = "";
  while (i < words.length) {
    current += words[i];
    i++;
    if (!dic[current]) {
      answer.push(dic[current.slice(0, -1)]);
      dic[current] = nextIndex;
      nextIndex++;
      i--;
      current = "";
    }
  }
  answer.push(dic[current]);
  return answer;
}
