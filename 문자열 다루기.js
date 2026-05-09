function solution(s) {
  let len = s.length;
  let temp = s.split("").map(v => +v);

  if ((len === 4 || len === 6) && !temp.includes(NaN)) {
    return true;
  }
  return false;
}
