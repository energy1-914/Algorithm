//여행경로
function solution(tickets) {
  let answer = [];
  let n = tickets.length;
  let ch = Array(n).fill(0);
  let tmp = ["ICN"];
  function DFS(L, s) {
    if (L === n) {
      answer.push(tmp.slice());
    }
    for (let i = 0; i < n; i++) {
      if (tickets[i][0] === s && ch[i] === 0) {
        ch[i] = 1;
        tmp.push(tickets[i][1]);
        DFS(L + 1, tickets[i][1]);
        ch[i] = 0;
        tmp.pop();
      }
    }
  }
  DFS(0, "ICN");
  answer.sort();
  return answer[0];
}
