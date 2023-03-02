//모의고사
function solution(answers) {
  let answer = [];
  let a1 = [1,2,3,4,5];
  let a2 = [2,1,2,3,2,4,2,5];
  let a3 = [3,3,1,1,2,2,4,4,5,5];
  
  let a1len = answers.filter((v, i) => v === a1[i % a1.length]).length;
  let a2len = answers.filter((v, i) => v === a2[i % a2.length]).length;
  let a3len = answers.filter((v, i) => v === a3[i % a3.length]).length;
  let max = Math.max(a1len, a2len, a3len);
  if (max === a1len) answer.push(1);
  if (max === a2len) answer.push(2);
  if (max === a3len) answer.push(3);
  return answer;
}