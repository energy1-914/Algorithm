// 키보드. 매개변수 s에 단어가 주어지고, 매개변수 k에 사용할 수 있는 키의 개수가 주어지면 s단어를 k개의 키로 완성할 수 있으면 true, 없으면 false를 반환.
// 대문자인 경우는 2개의 키를 사용한다.(shift키)
function solution(s, k) {
  const set = new Set(s.toLowerCase());
  let asciiArray = s.split('').map(x => x.charCodeAt());
  let number = 0;
  
  for (let idx = 0; idx < s.length; idx++) {
    if (asciiArray[idx] <= 90) number = 1;
  }
  
  if (set.size + number <= k) return true;
  return false;
}

console.log(solution('teacher', 6)) // true
console.log(solution('teaEr', 5)) // true
console.log(solution('Teacher', 6)) // false
console.log(solution('TeacHer', 7)) // true
console.log(solution('LifeisGood', 8)) // false
