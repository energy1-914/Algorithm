//매개변수 s에 문자열이 입력되면 중복된 문자는 제거하고 모든 문자는 오직 하나만 있게 하는 프로그램을 작성
//제거된 문자열의 각 문자는 원래 문자열의 순서를 유지

//Answer
function solution (s){
  let answer = [...new Set(s)].join('')
  return answer;
}
console.log(solution('ksekkset'))

//Answer2
function solution (s){
  let answer= s.split('').filter((v, i, self)=>self.indexOf(v)===i).join('')  //v: 원소 하나하나, i: 인덱스 번호,  self: s.split한 배열
  return answer
}

