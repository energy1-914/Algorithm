function solution(s) {
  let answer = 0;
  let arr = s.split("");
  let pairs = { "{": "}", "[": "]", "(": ")" };
  let n = s.length;
  // 올바른 괄호 문자열인지 확인
  // 스택을 이용해서 여는 괄호면 넣고, 닫는 괄호인 경우 스택에 담긴 마지막 값과 쌍을 이루면 스택을 팝한다
  // 포문을 돌고 나왔을 때 스택이 비어있으면 올바른 괄호 문자열
  function isValid(arr) {
    let stack = [];
    for (let i = 0; i < n; i++) {
      if (pairs[arr[i]]) {
        // 여는 괄호인 경우
        stack.push(arr[i]); // 스택에 담기
      } else {
        // 닫는 괄호인 경우
        if (pairs[stack[stack.length - 1]] === arr[i]) {
          // 스택의 마지막 값과 쌍을 이룰 경우
          stack.pop(); // 스택에서 꺼내기
        } else {
          return false;
        }
      }
    }
    if (stack.length) return false; // 스택이 남아있음 올바르지 않은 문자열
    return true; // 스택이 비어있으므로 올바른 문자열
  }
  // 왼쪽으로 x 칸 만큼 회전시키기
  for (let i = 0; i < n; i++) {
    if (isValid(arr)) answer++;
    arr.push(arr.shift());
  }
  return answer;
}
