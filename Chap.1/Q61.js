// 초코볼 
function solution(nums, h) {
  let lt = 1, rt = Math.max(...nums);
  let answer;

  function count(midNumber) {
    let count = 0;

    for (let number of nums) {
      count += Math.ceil(number/midNumber);
    }

    return count;
  }

  while (lt <= rt) {
    let midNum = parseInt((lt+rt)/2);
    if (count(midNum) > h) {
      lt = midNum + 1;
    } else if (count(midNum) <= h) {
      rt = midNum - 1;
      answer = midNum;
    }
  }

  return answer;
}
console.log(solution([29, 12, 24, 5, 19], 6)) // 24