const strings = ['a', 'b', 'c', 'd'];

strings.push('e'); // O(1) operation
strings.pop(); // O(1)

strings.splice(0, 1, 'alien'); // O(n)

// GET THE LAST ITEM OF AN ARRAY

const tenant_of = ['first', 'second', 'last']

console.log(tenant_of[tenant_of.length -1])
