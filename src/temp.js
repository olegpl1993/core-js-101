/*
function encodeToRot13(str) {
  const base = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz ';
  const encode = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm ';
  return str.split('').map((el) => encode[base.indexOf(el)]).join('');
}

console.log(encodeToRot13('hello')); // => 'uryyb'
console.log(encodeToRot13('Gb trg gb gur bgure fvqr!')); // => 'To get to the other side!'
*/
