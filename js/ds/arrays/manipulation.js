const strings = ['a', 'b', 'c', 'd'];

strings.push('e'); // O(1) operation
strings.pop(); // O(1)

strings.splice(0, 1, 'alien'); // O(n)

console.log(strings);
