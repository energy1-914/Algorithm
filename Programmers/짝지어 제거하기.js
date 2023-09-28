  // 스택에 문자열을 하나씩 넣어가면서
  // 스택의 마지막 문자열과 넣으려는 문자열이 같으면 스택을 팝시킨다
  // 같지 않다면 스택에 문자열을 푸시한다
  // 포문으로 문자열을 한바퀴 돈 후 스택이 비어있다면
  // 모두 제거할 수 있으므로 1을 반환
  // 스택의 길이가 0보다 크다면 모두 제거할 수 없으므로 0을 반환
  //** 애초에 문자열 길이가 홀수이면 포문 돌기전에 그냥 0 리턴시키기 **
function solution(s) {
  let stack = [];
  let split = s.split('');
  if (split.length % 2) return 0;
  for (let x of split) {
      if (stack.at(-1) !== x) stack.push(x);
      else {
          stack.pop();
      }
  }
  return stack.length ? 0 : 1;
}