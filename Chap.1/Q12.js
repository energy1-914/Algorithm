//한번만 사용한 문자중에서 문자열에서 가장 먼저 나타난 문자의 인덱스를 반환(인덱스는 1부터 시작. 없을 경우 -1 반환)

function solution (s) {
  let array = s.split('');
  let newArr = array;
  for (let i = 0; i < array.length; i++) {  
    for (x of array) {
      let idx = array.indexOf(x);
      if (x === array[i]) newArr.splice(idx, 1);
    }
  }
  console.log(newArr); // [ 'a', 't', 'c' ]
  newArr[0]
}

 solution('statistics') // a 3
// solution('aabb') // -1
// solution('stringshowtime') // r 3