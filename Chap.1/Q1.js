// 내 답안

function solution(s, c) {
  let answer = 0;
  p1 = s.split('');
  for (i=0 ; i < s.length ; i++) {
    if (p1[i] === c) {
      answer = answer + 1;
    }
  }
  return answer;
}

solution("COMPUTERPROGRAMMING", "R")


// for 문은 안에서 return 을 만나면 바로 종료되기 때문에 for문 밖에 return 쓰기

//ANSWER 1 

function solution(s, c){
  let answer = 0;
  for(let i=0; i<s.lentgh; i++){
    if(s[i]===c) answer++;
  }
  return answer;
}
console.log(solution("COMPUTERPROGRAMMING", "R"))

//ANSWER 2

function solution (s, c) {
  let answer = 0;
  answer=s.split(c);  // answer = ['COMPUTE', 'P', 'OG', 'AMMING'] 배열이다
  return answer.length-1;
}
console.log(solution("COMPUTERPROGRAMMING", "R"))

// s="COMPUTERPROGRAMMINGRR" 인 경우
// s.split('R') = ['COMPUTE', 'P', 'OG', 'AMMING', '', '']