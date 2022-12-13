//같은 빈도수 만들기. 소문자 a, b, c로 이루어진 문자열. 동일빈도수가 되는 최소 추가 개수를 알파벳 a, b, c순으로 배열에 저장하여 반환.
function solution(s) {
  const sH = new Map();
  let maxNum = Number.MIN_SAFE_INTEGER;
  let arr = [];
  let keys = 'abc';

  for (let x of s) {
    sH.set(x, (sH.get(x) || 0) + 1)
  }

  for (let [key, value] of sH) {
    if (value > maxNum) maxNum = value;
  }
  for (let key of keys) {
    let value = sH.get(key)===undefined ? 0 : sH.get(key)  
    arr.push(maxNum - value)
  }
  return arr;
}

console.log(solution('aaabc')) // [0, 2, 2]
console.log(solution('aabb')) // [0, 0, 2]
console.log(solution('abc')) // [0, 0, 0]
console.log(solution('aaa')) // [0, 3, 3]
