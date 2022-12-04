//문자열의 숫자화 

//answer1
function solution(s) {
  let answer = 0;
  const numberArray = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  
  for (let i = 0; i < 9; i++) {
    s = s.replaceAll(numberArray[i], i)
  }
  answer = parseInt(s);
  return answer;
}

//answer2
function solution(s) {
  let answer = 0;
  let nums = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

  for (let i = 0; i <= 9; i++) {
    let tmp = s.split(nums[i]);
    s = tmp.join(i);
  }
  answer = parseInt(s);
  return answer;
 }  