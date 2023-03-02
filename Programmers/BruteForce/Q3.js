//소수찾기
function solution(numbers) {
  let answer = 0;
  let arr = numbers.split('');
  let n = arr.length;
  let cases = [];
  let ch = Array(n).fill(0);
  let tmp = [];
  function DFS(L, x) {
      if (L === x) cases.push(tmp.slice());
      else {
          for (let i = 0; i < n; i++) {
              if (ch[i] === 0) {
                  ch[i] = 1;
                  tmp.push(arr[i]);
                  DFS(L + 1, x); 
                  tmp.pop();
                  ch[i] = 0;
              }
          }
      }
  }
  for (let i = 1; i <= n; i++) {
    DFS(0, i);
  }
  cases = cases.map(x => x.join('')).map(x => +x);
  let set = new Set(cases);
  function primeNumber(num) {
      let flag = true;
      if (num <= 1) return 0;
      for (let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
          if (num % i === 0) flag = false;
      }
      if (flag) return 1;
      else return 0;
  }
  for (let x of set) {
      answer += primeNumber(x);
  }
  return answer;
}
console.log(solution('011'))