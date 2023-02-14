// 동전교환(냅색 알고리즘)
function solution(m, coin) {
  let answer = 0 ;
  let dy = Array(m + 1).fill(1000) // i 금액을 거슬러줄때 최소 동전 갯수
  dy[0] = 0;
  for (let i = 0; i < coin.length; i++) {
    for (let j = coin[i]; j < m + 1; j++) {
      dy[j] = Math.min(dy[j], dy[j - coin[i]] + 1);
    }
  }
  answer = dy[m];
  return answer;
}
console.log(solution(15, [1, 2, 5]));