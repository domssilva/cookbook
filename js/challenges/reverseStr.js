function reverse(str="hello") {
  // O(n) 

  // check the input
  if (!str || str.length < 2) return str
  if (typeof str !== 'string') return false

  let max = str.length - 1
  let res = ''

  while (max >= 0) {
    res += str[max]
    max--
  }
  
  return res
}

console.log(reverse())
console.log(reverse(3))

