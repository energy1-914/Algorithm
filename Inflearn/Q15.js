// 자기분열수(배열의 원소 중 자기 숫자만큼 빈도수를 갖는 숫자) 자기 분열수 중 가장 작은 수를 찾아 반환. 자기 분열수가 존재하지 않으면 -1 반환.
function solution(nums) {
  const sH = new Map();
  const obj = new Map();
  let minNum = Number.MAX_SAFE_INTEGER;
  for (let x of nums) {
    sH.set(x, (sH.get(x) || 0)+1);
  }

  for (let [key, value] of sH) {
    if (key === value) obj.set(key, value);
  }
    
  for (let [key, value] of obj) {
    if (minNum > key) minNum = key;
  }

  if (obj.size === 0) return -1;
  return minNum;
}

console.log(solution([1, 1, 3, 3, 2, 4])) // -1
console.log(solution([1, 2, 3, 1, 3, 3, 2, 4])) // 2
console.log(solution([1, 2, 3, 3, 3, 2, 4, 5, 5, 5])) // 1
console.log(solution([1, 2, 5, 5, 5, 5, 5, 3, 3, 3])) // 1


