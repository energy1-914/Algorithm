function solution(n) {
  let thd = n.toString(3).split("").reverse().join("");
  return parseInt(thd, 3);
}
