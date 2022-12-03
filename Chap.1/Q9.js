//문자열 s가 최대 문자 1개까지 지워서 회문문자열이 되면 “YES"를 출력하고, 그렇지 않으면 ”NO"를 출력하는 프로그램을 작성하세요.

function solution(s) {
  let answer = 'YES';
  let num = s.length ;
  for (let i=0; i< num/2; i++) { 
    if (s[i] !== s[num-i-1]) {
      const string1 = s.substring(i,num-i-1);
      const string2 = s.substring(i+1,num-i);
      // console.log(string1)
      // console.log(string2)
      // console.log((string1 !== string1.split('').reverse().join('')))
      // console.log(string2 !== string2.split('').reverse().join(''))
      
      if (string1 !== string1.split('').reverse().join('')
          && string2 !== string2.split('').reverse().join(''))
        answer = 'NO'
    } 
  }
  return answer;
}


solution('abcbdcba') //yes
solution('abcookcba') // yes
solution('abcacbakcba') // no
solution('abcabbakcba') // yes