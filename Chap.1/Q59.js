// 자연수 찾기 (이분 검색)
  function solution(nums, k) {
    let answer = 0;
    let lt = 0, rt = nums.length-1;

    while (lt <= rt) {
        let mid = parseInt((lt+rt)/2);
        if (nums[mid] - mid - 1 < k) {
          lt = mid + 1;
        }
        else rt = mid - 1;
    }
    answer = lt + k;
    return answer;
}
console.log(solution([2, 5, 7, 9, 12], 6)) // 10
