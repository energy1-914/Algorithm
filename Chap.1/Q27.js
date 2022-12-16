//k 이상 빈도수 문자. s에 문자열, 매개변수 k값이 주어지면 문자열 s에서 빈도수가 k개 이상인 문자만 추출하여 반환
//만약 A, B, a, b, c가 추출된다면 그 순서는 AaBbc 순서로 추출
function solution(s, k) {
  const sH = new Map();
  let array = [];
  let answer = [];

  for (let x of s) {
    sH.set(x, (sH.get(x) || 0) + 1);
  }

  for (let [key, value] of sH) {
    if (value >= k) array.push(key);   
  }
 
  let sortedArray = array.map(x => x.toUpperCase()).sort(); 

  for (let idx = 0; idx < sortedArray.length; idx++){
    if (sortedArray[idx] === sortedArray[idx+1]) {
      answer.push(sortedArray[idx], sortedArray[idx].toLowerCase());
      idx++;
    }
    else if (array.includes(sortedArray[idx])) answer.push(sortedArray[idx]);
    else answer.push(sortedArray[idx].toLowerCase());
 
  }
  return answer.join('');
}

console.log(solution('AteEaccAaeE', 2)) // AacEe
console.log(solution('ggeaceeAAgAGGG', 3)) // AeGg
console.log(solution('ggeaceeAAgAGGGKKK', 3)) // AeGgK
console.log(solution('AAAAAAAbbbbbEEEEEaaaaaaBBBBBB', 5)) // AaBbE
