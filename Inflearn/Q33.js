// 봉우리*** 자신의 상하좌우 숫자보다 큰 숫자는 봉우리 지역. 격자의 가장자리는 0으로 초기화
// 매개변수 board에 지도정보가 주어지면 봉우리 지역이 몇 개 있는지 반환

function solution(board) {
  let length = board.length;
  let answer = 0;

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      let flag = true;
      if (i+1 < length && board[i][j] <= board[i+1][j]) flag = false;
      if (j+1 < length && board[i][j] <= board[i][j+1]) flag = false;
      if (i-1 >= 0 && board[i][j] <= board[i-1][j]) flag = false;
      if (j-1 >= 0 && board[i][j] <= board[i][j-1]) flag = false;
      if (flag) answer++;
    }
  }
  return answer; 
}

console.log(solution([
  [5, 3, 7, 2, 3], 
  [3, 7, 1, 6, 1], 
  [7, 2, 5, 3, 4], 
  [4, 3, 6, 4, 1], 
  [8, 7, 3, 5, 2]
])) //10