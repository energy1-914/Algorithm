//매개변수 s에 문자열이 입력되면 해당 문자열이 회문 문자열이면 "YES",  아니면 “NO"를 출력하는 프로그램을 작성(단 회문을 검사할 때 대소문자를 구분하지 않음)

//answer
function solution(s){
  let upperS='';
  let answer='';
  let len=s.length%2;  //s 길이가 짝수면 len=0 , 홀수면 len=1
  let num=s.length;
  Array.from(s).forEach(x => {
    upperS+=x.toUpperCase()
  });
  if (len===0){
    for(i=0;i<num/2;i++){
      if(upperS[i]===upperS[num-1-i]) answer='YES';
      else answer='NO';
    }
  }
  else if(len===1){
    for(i=0;i<(num/2)-1;i++){
      if(upperS[i]===upperS[num-1-i]) answer='YES';
      else answer='NO';
    }
  }

return answer;
}

console.log(solution('ffgffr'));



//answer
function solution(s){
  let upperS=s.toUpperCase()
  let answer='YES';
  let num=s.length;
  for(i=0;i<num/2;i++){
    if(!(upperS[i]===upperS[num-1-i])) answer='NO';
  }
return answer;
}

console.log(solution('gooG'));