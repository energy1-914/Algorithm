function solution(babbling) {
  let answer = 0;
  let cases = ["aya", "ye", "woo", "ma"];
  while (babbling.length) {
    let target = babbling.shift();
    // 타겟이 x 를 포함한다면 해당 부분을"*" 로 대체한다.
    // 반복해서 타겟을 *로 split후 조인한 값이 "" 이 된다면 모두 대체할 수 있다는 뜻이니 answer++ 한다.
    for (let x of cases) {
      if (target === x) answer++;
      else if (target.includes(x)) {
        target = target.replace(x, "*");
      }
    }
    if (target.split("*").join("") === "") answer++;
  }
  return answer;
}
