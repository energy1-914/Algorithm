//최대 매출
//매개변수 nums에 N일 동안의 매출기록이 주어지고, k가 주어지면 연속된 k일 동안의 매출기록 중 가장 큰 값을 찾아 반환
function solution(nums, k) {
  let salesSumArray = [];

  for (let i = 0; i < nums.length - k + 1; i++) {
    let [j, salesSum] = [i, 0];
    while (j < i + k) {
      salesSum += nums[j];
      j++; 
    }
    salesSumArray.push(salesSum);
  }

  return Math.max(...salesSumArray);
}

// console.log(solution([12, 15, 11, 20, 25, 10, 20, 19, 13, 15], 3)) // 56
// console.log(solution([1, 2, 3, 5, 6, 7, 1, 3, 9], 5)) // 26
// console.log(solution([12, 34, 56, 72, 93, 121, 33, 11, 23, 52], 4)) // 342

//*** two pointers 이용한 sliding window ***
function sol2(nums, k) {
  let answer;
  let sum = 0;
  let lt = 0;
  
  for (let i = 0; i < k; i++) {
    sum += nums[i];
  }
  answer = sum;

  for (let rt = k; rt < nums.length; rt++) {
    sum += (nums[rt] - nums[lt]);
    answer = Math.max(sum, answer);
    lt++;
  }
  return answer;
}

console.log(sol2([12, 15, 11, 20, 25, 10, 20, 19, 13, 15], 3)) // 56
console.log(sol2([1, 2, 3, 5, 6, 7, 1, 3, 9], 5)) // 26
console.log(sol2([12, 34, 56, 72, 93, 121, 33, 11, 23, 52], 4)) // 342



// O(kn)이라서 limit. O(n)으로 짜야함
function solution(nums, k) {
  let salesSumArray = [];

  for (let i = 0; i < nums.length - k + 1; i++) {
    let salesSum = 0;
    for (let j = i; j < i + k; j++) {
      salesSum += nums[j];
    }
    salesSumArray.push(salesSum);
  }

  return Math.max(...salesSumArray);
}

// console.log(solution([12, 15, 11, 20, 25, 10, 20, 19, 13, 15], 3)) // 56
// console.log(solution([1, 2, 3, 5, 6, 7, 1, 3, 9], 5)) // 26
// console.log(solution([12, 34, 56, 72, 93, 121, 33, 11, 23, 52], 4)) // 342
