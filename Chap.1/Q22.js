//점수 계산. 처음 문제는 1점으로 계산하고 연속으로 정답을 맞추는 경우 두 번째 문제는 2점, 세 번째 문제는 3점, ..., K번째 문제는 K점으로 계산
//매개변수 nums에 시험문제의 채점 결과가 주어졌을 때, 총 점수를 계산하는 프로그램을 작성
function solution(nums) {
  let arr = [...nums];
  let cumulativeScore = 1;
  let answer = 0;
  
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === 1 && nums[i+1] === 1) {
      cumulativeScore++;
      arr[i+1] = cumulativeScore;
    }
    else if (nums[i] === 0) cumulativeScore = 1;
  }   

  arr.map(x => answer+=x);

  return answer;
}                     

console.log(solution([1, 0, 1, 1, 1, 0, 0, 1, 1, 0])) // 10
console.log(solution([1, 1, 1, 1, 1, 0, 1])) // 16
console.log(solution([0, 1, 0, 1, 0, 1, 1, 1])) // 8
console.log(solution([0, 0, 0, 0, 0])) // 0
console.log(solution([1, 0, 0, 0, 1])) // 2
