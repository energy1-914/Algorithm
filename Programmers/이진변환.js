function solution(s) {
  let answer = [0, 0];
  // [ 이진 변환 횟수, 제거된 0 갯수]
  let temp = s;

  while (temp !== "1") {
    let c = temp
      .split("")
      .filter(n => n !== "0")
      .join("");
    answer[0] += 1;
    answer[1] += temp.length - c.length;
    temp = c.length.toString(2);
  }

  return answer;
}
