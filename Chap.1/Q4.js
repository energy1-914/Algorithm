//매개변수 s에 N개의 문자열 중 가장 긴 문자열을 반환. 답이 여러개면 s배열에서 제일 먼저 나타나는 문자열이 답.

function solution(s){
  const x = s.length;
  let a = ''
  for(i=0; i<x-1; i++){
    if(s[i].length > s[i+1].length) a = s[i]
    else a=s[i]

 }
 return a
}
console.log(solution(['teacher', 'time', 'student', 'beautiful', 'good']))

//ANSWER

function solution(s){
  let answer='', maxL=Number.MIN_SAFE_INTEGER;
  for(let x of s){
    if(x.length > maxL) {
      maxL=x.length;
      answer=x;
    }
  }
  return answer; 
}
console.log(solution(['teacher', 'time', 'student', 'beautiful', 'good']))