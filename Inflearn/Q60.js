// 랜선자르기 (결정알고리즘)
function solution(nums, n) {
  let lt = 1;
  let rt = Math.max(...nums);
  let answer;
  nums.sort()
  
  while (lt <= rt) {
    let count = 0;
    let midNum = parseInt((lt+rt)/2);
    for (let x of nums) {
      count += Math.floor(x/midNum);
    }
  
    if (count >= n) {
      answer = midNum;
      lt = midNum + 1;
    }
    else rt = midNum - 1;
  }

  return answer;
}
console.log(solution([86, 43, 50, 99], 9)) // 25
console.log(solution([802, 743, 457, 539], 11)) // 200
