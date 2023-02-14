// let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let input = require("fs").readFileSync("example.txt").toString().split("\n");

for (let i = 0; i < input.length - 1; i++) {
  let a = input[i].split(" ");
  console.log(parseInt(a[0]) + parseInt(a[1]));
}

for(let i = 0; i < input.length; i++){
	let data = input[i].split(' ').map(Number);
  	console.log(data[0] + data[1]);
}
