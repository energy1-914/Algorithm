function solution(numbers) {
  let total = [1, 2, 3, 4, 5, 6, 7, 8, 9].reduce((a, b) => a + b, 0);
  let answer = numbers.reduce((a, b) => a + b, 0);

  return total - answer;
}

function solution(numbers) {
  let answer = 0;

  for (let i = 1; i <= 9; i++) {
    if (!numbers.includes(i)) {
      answer += i;
    }
  }

  return total - answer;
}
