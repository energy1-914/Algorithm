function solution(citations) {
  let answer = 0;
  while (true) {
    if (citations.filter(x => x >= answer).length >= answer) {
      answer++;
    } else return answer - 1;
  }
}

function solution(citations) {
  let answer = 0;
  citations.sort((a,b) => b-a);
  for (let i = 0; i < citations.length; i++) {
      answer = Math.max(answer, Math.min(citations[i], i + 1));
  }
  return answer;
}