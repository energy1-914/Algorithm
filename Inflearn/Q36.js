// 올바른 괄호.
// 괄호 문자열이 입력 시 올바른 괄호이면 “YES", 올바르지 않으면 ”NO"를 출력 
// (())() - 올바른 괄호. (()())) - 올바르지 않은 괄호.

function solution(s) {
  let stack = [];
  let length = s.length;

  for (let idx = 0; idx < length; idx++) {
    if (s[idx] === '(') stack.push(s[idx]);
    else if (stack.length > 0 && s[idx] === ')') stack.pop() ;
    else return 'NO';
  }

  return stack.length === 0 ? 'YES' : 'NO';
}

console.log(solution('(())()')) // "YES"
console.log(solution('(()(()')) // "NO"
console.log(solution('()())')) // "NO"
console.log(solution('())(')) // "NO"
console.log(solution(')((')) // "NO"
console.log(solution('(()())')) // "YES"
console.log(solution('(()()))')) // "NO"

