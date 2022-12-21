// 올바른 괄호 만들기
// 매개변수 s에 괄호 문자열이 주어지면 올바른 괄호문자열이 되도록 하기 위한 최소 추가 문자의 개수를 반환.
// s="(()(" 라면 ')'괄호를 2개 추가해서 "(())()"로 만든다.
function solution(s) {
  let stack = [];
  let answer = 0;

  for (let string of s) {
    if (string === '(') stack.push(string);
    else if (stack.length > 0 && string === ')') stack.pop();
    else answer++;
  }

  answer += stack.length;
  return answer;
}

console.log(solution('(()))')) // 1
console.log(solution('(())')) // 0
console.log(solution('()()))')) // 2
console.log(solution('()))(')) // 3
