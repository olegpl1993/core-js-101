/*
function swapHeadAndTail(arr) {
  return arr.length % 2 === 0
    ? [arr.slice(arr.length / 2, arr.length), arr.slice(0, Math.ceil(arr.length / 2))].flat(1)
    : [arr.slice(Math.ceil(arr.length / 2), arr.length),
      arr[Math.floor(arr.length / 2)],
      arr.slice(0, (arr.length / 2))].flat(1);
}

console.log(swapHeadAndTail([1, 2, 3, 4, 5]));
//   =>  [ 4, 5, 3, 1, 2 ]
console.log(swapHeadAndTail([1, 2]));
//  => [ 2, 1 ]
console.log(swapHeadAndTail([1, 2, 3, 4, 5, 6, 7, 8]));
//   =>  [ 5, 6, 7, 8, 1, 2, 3, 4 ]
*/
