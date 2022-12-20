//회장선거
//매개변수 votes에 추천정보가 주어지면 0번 학생부터 N-1번 학생까지 각 학생이 감사이메일을 받는 횟수를 반환
// k번 이상 추천받은 학생만 출마가능, 출마한 학생이 추천인에게 감사이메일 전송.
// [0,1] : 0번 학생이 1번 학생을 추천
function solution(n, votes, k) {
  let length = votes.length;
  let sH = new Map();
  let candidiates = [];
  let eH = new Map();

  for (let i = 0; i < length; i++) {
      sH.set(votes[i][1], (sH.get(votes[i][1]) || 0)+1)
  }

  for (let [key, value] of sH) {
    if (value >= k) candidiates.push(key); // [0, 3]
  }

  for (let i = 0; i < n; i++) {
    eH.set(i, 0)
  }

  for (let i = 0; i < length; i++) {
    for (let candidate of candidiates) {
      if (votes[i][1] === candidate)  eH.set(votes[i][0], (eH.get(votes[i][0]) || 0) + 1);
    }
  }
  return [...eH.values()]
}

console.log(solution(4, [
  [0, 1], 
  [0, 3], 
  [1, 2], 
  [2, 0], 
  [2, 3], 
  [3, 0]
], 2)) // [1, 0, 2, 1]