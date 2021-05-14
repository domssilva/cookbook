const twoSum = require('../hash_tables/main.js')

describe('twosum problem with hash table', () => {
  it('success case', () => {
    const res = twoSum([2, 7, 8, 11, 15], 9)
    expect(res).toEqual([0, 1])
  })
  it ('empty input returns and empty array', () => {
    const res = twoSum([], 0)
    expect(res).toEqual([])
  })
})
