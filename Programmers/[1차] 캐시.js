// LRU (Least Recently Used)
// 가장 오랫동안 참조되지 않은 페이지를 교체하는 방식
// Cache Hit : CPU가 참조하고자 하는 메모리가 캐시에 존재하는 경우
// Cache Miss : CPU가 참조하고자 하는 메모리가 캐시에 존재하지 않는 경우
function solution(cacheSize, cities) {
  let answer = 0;
  let cache = [];
  if (cacheSize === 0) return cities.length * 5;

  while (cities.length) {
    let target = cities.shift().toUpperCase();
    if (cache.includes(target)) {
      answer += 1;
      let i = cache.indexOf(target);
      cache.splice(i, 1);
    } else {
      answer += 5;
      if (cache.length === cacheSize) {
        cache.shift();
      }
    }
    cache.push(target);
  }

  return answer;
}
