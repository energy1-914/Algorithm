function solution(price, money, count) {
  let sum = (price * count * (count + 1)) / 2;

  return sum - money > 0 ? sum - money : 0;
}
