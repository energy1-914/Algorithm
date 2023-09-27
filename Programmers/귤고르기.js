function solution(k, tangerine) {
  let answer = 0;
  let count = 0;
  let freq = {};
  for (let x of tangerine) {
    freq[x] ? freq[x]++ : (freq[x] = 1);
  }
  const sortedTangerine = Object.entries(freq).sort((a, b) => b[1] - a[1]);
  for (let x of sortedTangerine) {
    answer++;
    count += x[1];
    if (count >= k) {
      return answer;
    }
  }
}
// 그리디
// 최소를 구해야하므로 갯수가 가장 많은 귤부터 넣는다
// 객체에 귤: 갯수 를 담아준 후 내림차순으로 정렬한다
// 정렬 후 갯수가 큰 귤부터 넣어서 그때의 총 갯수가 k와 같거나 크면 리턴해준다
