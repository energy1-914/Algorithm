//한번만 사용한 문자중에서 문자열에서 가장 먼저 나타난 문자의 인덱스를 반환(인덱스는 1부터 시작. 없을 경우 -1 반환)

function solution (s) {
  const sH = new Map();

  for(let x of s){
    sH.set(x, (sH.get(x) || 0) + 1)
    }

  for (let x of s) {
    if (sH.get(x) === 1) return s.indexOf(x)+1;
  }
  return -1;
}

 console.log(solution('statistics')) // 3
console.log(solution('aabb')) // -1
console.log(solution('stringshowtime')) // 3