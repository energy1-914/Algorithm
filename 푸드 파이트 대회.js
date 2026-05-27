function solution(food) {
  let temp = [];
  for (let i = 1; i < food.length; i++) {
    for (let j = 1; j <= Math.floor(food[i] / 2); j++) {
      temp.push(i);
    }
  }
  return temp.join("") + "0" + temp.reverse().join("");
}
