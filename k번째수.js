function solution(array, commands) {
  var answer = [];
  for (let x of commands) {
    let slice = array.slice(x[0] - 1, x[1]);
    answer.push(slice.sort((a, b) => a - b)[x[2] - 1]);
  }
  return answer;
}
