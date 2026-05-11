process.stdin.setEncoding("utf8");
process.stdin.on("data", data => {
  const [n, m] = data.split(" ").map(v => +v);
  let answer = "";

  for (let i = 1; i <= m; i++) {
    let line = "*".repeat(n);
    answer += line + "\n";
  }
  console.log(answer);
});
