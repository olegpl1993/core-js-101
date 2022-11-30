/*
function isString(value) {
  let bool;
  if (typeof value === 'string') {
    bool = true;
  } else if (value === null) {
    bool = false;
  } else if (Array.isArray(value)) {
    bool = false;
  } else if (typeof value === 'object' && typeof value[0] === 'string') {
    bool = true;
  } else if (typeof value === 'object') {
    bool = false;
  } else {
    bool = false;
  }
  return bool;
}

console.log(isString());
console.log(isString(null));
console.log(isString([]));
console.log(isString({}));
console.log(isString('test'));
console.log(isString(new String('test')));

/**
 *   isString() => false
 *   isString(null) => false
 *   isString([]) => false
 *   isString({}) => false
 *   isString('test') => true
 *   isString(new String('test')) => true
 */
