
function removeFirstOccurrences(str, value) {
  return str.replace(value, '');
}

console.log(removeFirstOccurrences('To be or not to be', 'not'));
console.log(removeFirstOccurrences('I like legends', 'end'));
console.log(removeFirstOccurrences('ABABAB', 'BA'));

// 'To be or not to be', 'not'  => 'To be or  to be'
// 'I like legends', 'end' => 'I like legs',
// 'ABABAB','BA' => 'ABAB'
