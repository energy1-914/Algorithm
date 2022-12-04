//학급회장 선출 - 최다 득표 알아내기

//answer1
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
  
//answer2
function solution(s) {
  let answer;
  let sH = new Map();
  for (let x of s) {
    sH.set(x, (sH.get(x) || 0) + 1);
  }

  let maxValue = 0;
  for (let [key, value] of sH) {
    if (value > maxValue) {
      maxValue = value;
      answer = key;
    }
  }
  return answer;
}
