// *** 서로 다른 빈도수 만들기. 매개변수 s의 모든 문자의 빈도수가 서로 다르도록 하기 위해 지워야 할 최소 개수를 반환.
function solution(s) {
 let sH = {};
 let answer = 0;
 const set = new Set();

 for (let str of s) {
  sH[str] = (sH[str] || 0) + 1; 
 }

 for (let key of Object.keys(sH)) {
    while (set.has(sH[key])) {
        answer++;
        sH[key]--;
    }
    if (sH[key] === 0) continue;
    set.add(sH[key]);
  }
  return answer;
}

console.log(solution('aaabbc')) // 0
console.log(solution('aebbbbc')) // 2
console.log(solution('aaabbbcc')) // 2
