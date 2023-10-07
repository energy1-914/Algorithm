function solution(want, number, discount) {
  let answer = 0;
  let n = discount.length;
  for (let i = 0; i < n - 9; i++) {
    let count = 0;
    let copyNumber = [...number];
    let j = i;
    while (count < 10) {
      let idx = want.indexOf(discount[j]);
      if (number[idx] >= 0) {
        copyNumber[idx]--;
      }
      count++;
      j++;
    }
    if (copyNumber.every(x => x === 0)) {
      answer++;
    }
  }
  return answer;
}
