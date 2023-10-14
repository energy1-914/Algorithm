function solution(str1, str2) {
  let g1 = [];
  let g2 = [];
  str1 = str1.split("");
  str2 = str2.split("");
  let n = str1.length;
  let m = str2.length;
  let eng = /^[a-zA-Z]*$/;
  let intersection = [];

  for (let i = 0; i < n - 1; i++) {
    let word = str1[i].toUpperCase() + str1[i + 1].toUpperCase();
    if (eng.test(word)) {
      g1.push(word);
    }
  }
  for (let i = 0; i < m - 1; i++) {
    let word = str2[i].toUpperCase() + str2[i + 1].toUpperCase();
    if (eng.test(word)) {
      g2.push(word);
    }
  }
  let unionCount = g1.length + g2.length;

  //교집합
  while (g1.length) {
    let target = g1.pop();
    for (let i = 0; i < g2.length; i++) {
      if (target === g2[i]) {
        intersection.push(target);
        g2[i] = 0;
        break;
      }
    }
  }
  // 합집합
  let intersectionCount = intersection.length;
  unionCount -= intersectionCount;
  
  return unionCount + intersectionCount
    ? Math.floor((intersectionCount / unionCount) * 65536)
    : 65536;
}
