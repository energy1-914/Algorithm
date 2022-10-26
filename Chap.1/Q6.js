// 매개변수 s에 N개의 문자열이 주어지면 각 문자열들의 최대 공통 접두사를 반환하라.

//Answer
function solution(s){
  let answer='';                        //answer에 빈 문자열 넣음
  let len=Number.MAX_SAFE_INTEGER;      //len은 굉장히 큰 숫자
  s.forEach(x=>{                       // s의 배열을 순서대로 x에 넣어서 len과 x의 길이를 비교해서 더 작은 길이를 len에 저장 >> 결국 len에는 s의 단어 중 가장 짧은 단어의 길이가 남는다. 
    len=Math.min(len, x.length);                       
  })
  for(let i=0;i<len; i++){             //가장 짧은 단어의 길이만큼만 for문을 돌린다   
    let set = new Set();
    s.forEach(x=>{
      set.add(x[i]);                   // i=0 인 경우, x에 차례로 'long', 'longest', 'longtime'들어감 > set.add(x[0]) >> set=new Set(['l','l','l'])={'l'}  
    })
    if(set.size===1) answer+=s[0][i];  // s[0] = 'long' >>answer='l'
    else break;
  }
  return answer;
}
console.log(solution( ['long', 'longest', 'longtime'] ));
           















