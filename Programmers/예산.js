//그리디

function solution(d, budget) {
  let temp = [];
  d.sort((a, b) => a - b);

  for (let i = 0; i < d.length; i++) {
    let sum = temp.reduce((a, b) => a + b, 0);
    if (sum + d[i] <= budget) {
      temp.push(d[i]);
    }
  }
  return temp.length;
}
