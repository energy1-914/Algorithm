function solution(number) {
  let answer = 0;

  function dfs(i, count, sum) {
    if (count === 3 && sum === 0) {
      answer++;
      return;
    }
    if (i === number.length) {
      return;
    }
    dfs(i + 1, count + 1, sum + number[i]);
    dfs(i + 1, count, sum);
  }

  dfs(0, 0, 0);

  return answer;
}
