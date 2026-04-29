function solution(arr) {
  let answer = [];
  if (arr.length === 1) return [-1];

  let min = Math.min(...arr);
  answer = arr.filter(n => n !== min);
  return answer;
}
