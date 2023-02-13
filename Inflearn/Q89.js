// 최대 부분 증가수열(LIS)
function solution(arr) {
  let answer = 0;
  let length = arr.length;
  let dy = Array(length).fill(0);
  dy[0] = 1;
  for (let i = 1; i < length; i++) {
    let max = 0;
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] < arr[i] && dy[j] > max) {
        max = dy[j];
      }
    }
    dy[i] = max + 1;
    answer = Math.max(dy[i], answer);
  }
  console.log(dy)
  return answer;
  
}
console.log(solution([5, 3, 7, 8, 6, 2, 9, 4]));
