const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(x => x.split(" ").map(x => +x));
let [n] = input.shift();
let tree = Array.from(Array(n + 1), () => []);
for (let x of input) {
  tree[x[0]].push(x[1]);
  tree[x[1]].push(x[0]);
}
let answer = Array.from(Array(n + 1), () => 0);
let check = Array(n + 1).fill(false);
let queue = [1];
check[1] = true;
while (queue.length) {
  let parent = queue.shift();
  for (let child of tree[parent]) {
    if (!check[child]) {
      check[child] = true;
      answer[child] = parent;
      queue.push(child);
    }
  }
}
answer = answer.splice(2);
let result = "";

answer.map(x => (result += x + "\n"));
console.log(result)