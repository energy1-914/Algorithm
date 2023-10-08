let board = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n")
  .map(x => x.split(" ").map(x => +x));

let direction = [
  [-1, 1],
  [0, 1],
  [1, 1],
  [1, 0],
];
let winner;
let spot;
function Check(x, y, color) {
  for (let k = 0; k < 4; k++) {
    let count = 1;
    let nx = x + direction[k][0];
    let ny = y + direction[k][1];
    while (true) {
      if (nx >= 0 && nx < 19 && ny >= 0 && ny < 19 && board[nx][ny] === color) {
        count++;
        nx = nx + direction[k][0];
        ny = ny + direction[k][1];
      } else break;
    }
    if (count === 5) {
      //6목인지 체크하기
      let prevX = x - direction[k][0];
      let prevY = y - direction[k][1];
      // 이전 좌표가 같은 돌이면 6목이므로 컨티뉴시켜준다
      if (prevX >= 0 && prevX < 19 && prevY >= 0 && prevY < 19) {
        if (board[prevX][prevY] === color) continue;
      }
      winner = color;
      spot = [x + 1, y + 1];
      return;
    }
  }
}

for (let i = 0; i < 19; i++) {
  for (let j = 0; j < 19; j++) {
    if (board[i][j] > 0) {
      Check(i, j, board[i][j]);
    }
  }
}

if (!winner) console.log(0);
else {
  console.log(winner);
  console.log(`${spot[0]} ${spot[1]}`);
}
