//대소문자 변환

function solution(s){
  let answer = '';
  for (let x of s){
    if (/[A-Z]/.test(x)) {    // /[A-Z]/.test(x) : 대문자 검사 정규표현식
      answer += x.toLowerCase();
    } else {
      answer += x.toUpperCase();
    }
  }
  return answer;
}
console.log(solution('AbCdEfGhIjK'))


// ANSWER 

function solution(s){
   let answer = '';
   for(let x of s){
    if(x === x.toUpperCase()) answer+= x.toLowerCase();
    else  answer += x.toUpperCase();
  }
  return answer;
} 
console.log(solution('TeacHer'));