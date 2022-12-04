//학급회장 선출 - 최다 득표 알아내기
function solution(s) {
  let answer = '';
  s = s.split('');
  const set = new Set(s);
  const array = [...set];
  const length = array.length;
  let countArray = [];
    
  for (let i = 0; i < length; i++) {
    let count = s.filter(x => x === array[i]).length;
    countArray.push(count);
    let index = countArray.indexOf(Math.max.apply(null, countArray));
    answer = s[index];
   }
    return answer;
  }
  