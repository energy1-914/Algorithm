//문자열에서 가장 먼저 두 번 이상 나타난 문자를 반환. 두 번 이상 사용한 문자가 없을 경우 -1를 반환.

function solution(s) {
  const sH = new Map();

  for (let x of s) {
    sH.set(x, (sH.get(x) || 0)+1)
    if (sH.get(x) === 2) return x;
  }
  return -1;
}

console.log(solution('abccbaacz')) // c
console.log(solution('aabb')) // a
console.log(solution('abcdefg')) // -1
