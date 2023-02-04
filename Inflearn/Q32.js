// 격자판 최대합.
// n x n 행렬이 매개변수 board에 주어질 때, 각 행의 합, 열의 합, 두 대각선의 합 중 가장 큰 값을 반환.
function solution(board){
  let length = board.length;
  let [answer, diagSum1, diagSum2] = [0, 0, 0];

  for (let i = 0; i < length; i++) {
    let rowSum = colSum = 0;
    for (let j = 0; j < length; j++) {
      rowSum += board[i][j];
      colSum += board[j][i];
    }
    answer = Math.max(answer, rowSum, colSum);
  }

  for (let i = 0; i < length; i++) {
    diagSum1 += board[i][i];
    diagSum2 += board[i][length-i-1];
  }
  answer = Math.max(answer, diagSum1, diagSum2);

  return answer;
}

console.log(solution([
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19]
]))