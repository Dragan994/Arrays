const values = ['a', 'b', 'c'];

values.push('d', 'e');

const last = values.pop();
const first = values.shift();

values.unshift('s');

console.log(last)
console.log(first)
console.log(values)