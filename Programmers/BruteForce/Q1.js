//최소 직사각형
function solution(sizes) {
  var answer = 0;
  let width = [];
  let height = [];
  let n = sizes.length;
  let max;
  let maxWidth = Number.MIN_SAFE_INTEGER;
  let maxHeight = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < n; i++) {
      if (sizes[i][0] <= sizes[i][1]) {
          height.push(sizes[i][1]);
          width.push(sizes[i][0]);
      } else {
          height.push(sizes[i][0]);
          width.push(sizes[i][1]);
      }
  }
  for (let x of width) {
      maxWidth = Math.max(x, maxWidth);
  }
  for (let x of height) {
      maxHeight = Math.max(x, maxHeight);
  }
  answer = maxWidth * maxHeight;
  return answer;
}