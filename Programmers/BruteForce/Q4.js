//카펫
function solution(brown, yellow) {
  let answer = [];
  let n = brown + yellow;
  let divisorNum = [];
  function divisor(n) {
      for (let i = 3; i <= parseInt(Math.sqrt(n)); i++) {
          if (n > 1 && n % i === 0) divisorNum.push([n/i, i]);
      }   
  }
  divisor(n);
  if (divisorNum.length === 1) answer = divisorNum[0];
  for (let x of divisorNum) {
      if ((x[0] - 2) * (x[1] - 2) === yellow) answer = x;
  }
  
  return answer;
}