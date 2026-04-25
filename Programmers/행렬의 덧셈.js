function solution(arr1, arr2) {
  let answer = [[]];

  for (let i = 0; i < arr1.length; i++) {
    let temp = [];
    for (let j = 0; j < arr1[i].length; j++) {
      temp.push(arr1[i][j] + arr2[i][j]);
    }
    answer[i] = temp;
  }

  return answer;
}

function solution(arr1, arr2) {
  return arr1.map((arr1, idx1) =>
    arr1.map((val, idx2) => val + arr2[idx1][idx2]),
  );
}
