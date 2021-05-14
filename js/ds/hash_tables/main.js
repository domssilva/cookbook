// in js, hash tables are just "objects"
console.clear()

/*
 what if the input is an empty array? => []
 what if there is no possible result? => []
*/

const twoSum = (intArray, target) => {
  if (intArray.length === 0) return []

  const map = {}
  for (let i = 0; i < intArray.length; i++) {
    map[intArray[i]] = i
  }

  for (let i = 0; i < intArray.length; i++) {
    let complement = target - intArray[i];
    if (map[complement]) {
      return [i, map[complement]]
    }
  }

  return []
}

module.exports = twoSum
