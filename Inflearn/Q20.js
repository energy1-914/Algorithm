//팰린드롬 길이. 문자열 s가 주어지면 해당 문자열의 문자를 가지고 만들 수 있는 최대길이 팰린드롬을 만들고 그 길이를 반환.
function solution(s) {
  const sH = new Map();
  let length = 0;

  for (let x of s) {
    sH.set(x, (sH.get(x) || 0)+1);
  }

  for (let [key, value] of sH) {
    if (value%2 === 0) length += value;
    else if (value%2 === 1) length += (value-1);
  }
  answer = length + 1;
  return answer;
}

console.log(solution('abcbbbccaa')) // 9 
console.log(solution('abcde')) // 1
console.log(solution('ccc')) // 3
