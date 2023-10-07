function solution(arr1, arr2) {
  let m = arr1.length;
  let n = arr2[0].length;
  let answer = Array.from(Array(m), () => Array(n).fill(0));
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2[0].length; j++) {
      for (let k = 0; k < arr2.length; k++) {
        answer[i][j] += arr1[i][k] * arr2[k][j];
      }
    }
  }
  return answer;
}
