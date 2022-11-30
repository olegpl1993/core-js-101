
/**
 * Returns the string representation of rectangle with specified width and height
 * using pseudograhic chars
 *
 * @param {number} width
 * @param {number} height
 * @return {string}
 *
 * @example
 *
 *            '┌────┐\n'+
 *  (6,4) =>  '│    │\n'+
 *            '│    │\n'+
 *            '└────┘\n'
 *
 *  (2,2) =>  '┌┐\n'+
 *            '└┘\n'
 *
 *             '┌──────────┐\n'+
 *  (12,3) =>  '│          │\n'+
 *             '└──────────┘\n'
 *
 */
function getRectangleString(width, height) {
  let str = '┌';
  for (let i = 2; i < width; i += 1) {
    str += '─';
  }
  str += '┐\n';

  for (let i = 2; i < height; i += 1) {
    let subStr = '│';
    for (let n = 2; n < width; n += 1) {
      subStr += ' ';
    }
    subStr += '│\n';
    str += subStr;
  }

  str += '└';
  for (let i = 2; i < width; i += 1) {
    str += '─';
  }
  str += '┘\n';
  return str;
}

console.log(getRectangleString(6, 4));
