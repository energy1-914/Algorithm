//회문(팰린드롬) 만들기. 소문자로 이루어진 문자열 s의 문자를 재배치해서 팰린드롬(회문)을 만들 수 있으면 true, 없으면 false 반환.
// sol : 홀수가 1개이거나 모두 짝수면 true
function solution(s) {
  const sH = new Map();
  let oddNum = 0;
  for (let x of s) {
    sH.set(x, (sH.get(x) || 0)+1)
  }
  
  for (let [key, value] of sH) {
    if (value%2 === 1) oddNum++;
  }
  
  return oddNum <= 1;
}

console.log(solution('abbac')) //true
console.log(solution('abcbbbe')) //false
console.log(solution('ccccc')) //true

//객체 사용 방법
function solution(s) {
  let sH ={};
  let odd = 0;
  for (let x of s) {
    sH[x] = (sH[x] || 0) + 1;
  }

  for (let key of Object.keys(sH)) {
    if (sH[key]%2 === 1) odd++;
  }
  return odd <= 1;
}