//매개변수 s에 문자열이 입력되면 반복횟수를 표기하여 반환하는 프로그램을 작성. 반복횟수가 1인 경우 생략.
function solution(s){
  let answer='';
  let cnt=1;
  for(i=0;i<s.length;i++){
    if(s[i]===s[i+1]) cnt++
    else if(cnt>1) {
      answer+=s[i]+cnt;
      cnt=1;
    }
    else answer+=s[i]
}
return answer;
}
console.log(solution('KKHSSSSSSSE'))  // 'K2HS7E'
                    