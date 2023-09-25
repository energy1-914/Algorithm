// 주어진 입력의 첫 두 수의 최소공배수를 구한다
// 나머지 값을 처음 구한 최소공배수와 두 수의 최소공배수를 구한다 .. 반복
// 최소공배수 구하기 - 두 수의 곱 / 두 수의 최대공약수
// 최대공약수 구하기 - 유클리드 호제법
// a와 b의 최대공약수 = a 와 b%a의 최대공약수 .. 반복해서 둘 중 한 값이 0인 경우에 나머지 수를 리턴

function solution(arr) {
  function gcd(a, b) {
    while (b !== 0) {
      let temp = a;
      a = b;
      b = temp % b;
    }
    return a;
  }
  let GCD = gcd(arr[0], arr[1]);
  let LCM = (arr[0] * arr[1]) / GCD;
  for (let i = 2; i < arr.length; i++) {
    GCD = gcd(arr[i], LCM);
    LCM = (arr[i] * LCM) / GCD;
  }
  return LCM;
}
