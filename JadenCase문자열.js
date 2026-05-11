function solution(s) {
  return s
    .split(" ")
    .map(v => {
      if (v === "") return "";
      return v[0].toUpperCase() + v.slice(1).toLowerCase();
    })
    .join(" ");
}
