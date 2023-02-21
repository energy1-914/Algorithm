//뒤집은 소수
function isPrime(n) {
  if (n === 1) return false;
  for (let i = 2; i <= parseInt(Math.sqrt(n)); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

function solution(nums) {
  let answer = [];
  for (let x of nums) {
    let res = 0;
    while (x) {
      let t = x % 10;
      res = res * 10 + t;
      x = parseInt(x / 10);
    }
    if (isPrime(res)) {
      answer.push(res);
    }
  }
  return answer;
}
console.log(solution([32, 55, 62, 20, 250, 370, 200, 30, 100]));
