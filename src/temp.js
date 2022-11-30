
function extractNameFromTemplate(value) {
  return value.split('Hello, ')[1].split('!')[0];
}

console.log(extractNameFromTemplate('Hello, John Doe!'));

// 'Hello, John Doe!' => 'John Doe'
// 'Hello, Chuck Norris!' => 'Chuck Norris'
