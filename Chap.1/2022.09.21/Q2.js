// Q 매개변수 s에 문자열이 주어지면 s문자열에 대문자가 몇 개있는지 개수를 반환하는 프로그램을 작성하세요.

function solution(s){
  let answer=0;
   for (i=0; i<s.length; i++){
    let p = s[i].charCodeAt    //charCodeAt : 아스키 번호로 반환
    if (64<p && p<91) answer++
   }
  return answer;
}
console.log(solution("KoreaTimeGood"))

// ANSWER 1

function solution(s){
  let answer = 0;
  for(let x of s){
    let num=x.charCodeAt();    
    if(num>=65 && num <= 90) answer++;
  }
  return answer;
}
console.log(solution("KoreaTimeGood"));


// ANSWER 2

function solution(s){
  let answer=0;
  for(let x of s){
    if(x===x.toUpperCase()) answer++;  //대문자인 경우 true 이므로 answer값 +1
  }
  return answer;
}
console.log(solution("KoreaTimeGood"));