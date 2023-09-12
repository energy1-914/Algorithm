function solution(participant, completion) {
  let participantObj = {};
  // 참여자 목록을 객체로 변환
  for (let person of participant) {
    participantObj[person] = (participantObj[person] || 0) + 1;
  }
  // 완주자 목록을 사용하여 참여자 객체의 카운트를 줄임
  for (let person of completion) {
    participantObj[person]--;
  }
  for (let person in participantObj) {
    if (participantObj[person] >= 1) return person;
  }
}
