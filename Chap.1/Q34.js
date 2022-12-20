//스카이라인. 
//매개변수 board에 도시의 각 빌딩의 높이 정보가 주어지면 도시의 스카이라인은 변함없이 각 빌딩의 높이를 최대한 높이고자 합니다. 
//각 빌딩의 높이를 증가시킬 수 있는 최대 높이의 합을 반환.

function solution(board) {
  let answer = 0;
  let length = board.length;
  let rowMaxArray = [];
  let colMaxArray = [];

  for (let i = 0; i < length; i++) {
    let rowMaxNum = colMaxNum = 0;
    for (let j = 0; j < length; j++) {
      if (rowMaxNum < board[i][j]) rowMaxNum = board[i][j]; //행 최댓값
      if (colMaxNum < board[j][i]) colMaxNum = board[j][i]; //열 최댓값
    }
    rowMaxArray.push(rowMaxNum);
    colMaxArray.push(colMaxNum);
  }

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      answer += Math.min(rowMaxArray[i], colMaxArray[j]) - board[i][j];
    }
  }
  return answer;
}

console.log(solution([
  [2, 5, 7, 3], 
  [6, 8, 9, 7], 
  [3, 2, 4, 5], 
  [7, 2, 5, 8]
])) //28

console.log(solution([
[3, 7, 6, 2], 
[5, 3, 8, 7], 
[3, 2, 5, 7], 
[7, 7, 5, 3]
])) //33