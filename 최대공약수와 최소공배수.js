function solution(n, m) {
  const getGcd = (a, b) => {
    while (b !== 0) {
      let r = a % b;
      a = b;
      b = r;
    }
    return a;
  };
  let gcd = getGcd(n, m);
  return [gcd, (n * m) / gcd];
}
