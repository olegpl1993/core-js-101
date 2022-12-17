/*
function sortDigitNamesByNumericOrder(arr) {
  const pattern = ['zero', 'one', 'two', 'three',
    'four', 'five', 'six', 'seven', 'eight', 'nine'];
  return arr.sort((a, b) => pattern.indexOf(a) - pattern.indexOf(b));
}

console.log(sortDigitNamesByNumericOrder([]));
// => []
console.log(sortDigitNamesByNumericOrder(['nine', 'eight', 'nine', 'eight']));
// => [ 'eight','eight','nine','nine']
console.log(sortDigitNamesByNumericOrder(['one', 'one', 'one', 'zero']));
// => [ 'zero','one','one','one' ]
*/
