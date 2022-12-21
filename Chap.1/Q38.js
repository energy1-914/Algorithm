// 괄호 문자 제거***
// 입력된 문자열에서 소괄호 ( ) 사이에 존재하는 모든 문자를 제거하고 남은 문자만 출력하는 프로그램을 작성하세요.
function solution(s) {
  let stack = [];

  for (let string of s) {
    if (string !== ')') stack.push(string);
    
    else {
      while (stack[stack.length - 1] !== '(') stack.pop();
      stack.pop(); 
    }
  }
  
  return stack.join('');
}

console.log(solution('(A(BC)D)EF(G(H)(IJ)K)LM(N)')) // 'EFLM'
console.log(solution('((AF)B)(D)E(F)')) // 'E'
console.log(solution('(Aab)(EsG)FFD')) // 'FFD'
console.log(solution('(YYYDD)sh(kkf(hfs))')) // 'sh'