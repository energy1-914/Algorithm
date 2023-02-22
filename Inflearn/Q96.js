//k번째 큰 수
function solution(k, arr) {
  let n = arr.length;
  let sum = [];
  for (i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        if (!sum.includes(arr[i] + arr[j] + arr[k])) {
          sum.push(arr[i] + arr[j] + arr[k]);
        }
      }
    }
  }
  sum.sort((a, b) => b - a);
  console.log(sum[k - 1]);
}

solution(3, [13, 15, 34, 23, 45, 65, 33, 11, 26, 42]);
