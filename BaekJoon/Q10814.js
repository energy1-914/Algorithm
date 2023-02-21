let [n, ...input] = require('fs').readFileSync('example.txt').toString().trim().split('\n');
input.sort((a, b) => a.split(' ')[0] - b.split(' ')[0]);
console.log(input.join('\n'));
