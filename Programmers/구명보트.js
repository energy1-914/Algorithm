function solution(people, limit) {
  // 무게 순으로 정렬해준다
  // 가장 무거운 사람과 가장 가벼운 사람의 합이 리미트를 안넘는다면 둘이 태우고 answer++
  // 넘는다면 무거운 사람만 태우고 answer++;
  let answer = 0;
  people.sort((a, b) => a - b);
  while (people.length) {
    let heavy = people.pop();
    let light = people[0];
    if (heavy + light <= limit) {
      people.shift();
    }
    answer++;
  }
  return answer;
}
