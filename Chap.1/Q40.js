// 연속된 문자 지우기
function solution(s) {
  let stack = [];

  for (let x of s) {
    if (stack.length === 0 || stack[stack.length - 1] !== x) stack.push(x);
    else stack.pop();
  }
  return stack.join('');
}

console.log(solution('acbbcaa')) // 'a'
console.log(solution('bacccaba')) // 'bacaba'