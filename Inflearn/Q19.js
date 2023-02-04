//기출 : 팰린드롬 분할. s에 문자열, k에 팰린드롬을 만들 개수가 주어질때, s의 모든 문자를 사용해서 k개의 문자를 만들 수 있으면 true, 없으면 false 반환.
// sol : 홀수 갯수가 k보다 작아야함. 
function solution(s, k) {
  const sH = new Map();
  let odd = 0;

  for (let x of s) {
    sH.set(x, (sH.get(x) || 0)+1)
  }

  for (let [key, value] of sH) {
    if (value % 2 === 1) odd++;
  }

  return odd <= k;
}

console.log(solution('aabbccee', 2)) //true
console.log(solution('abcabcabcca', 3)) //true
console.log(solution('aaccbbbefg', 3)) //false
