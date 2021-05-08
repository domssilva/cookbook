const mergeSortedArrays = require('../arrays/merge_sorted')

describe('Merging sorted arrays', () => {
    //it('', () => {})
    it('First array is empty, returns second array', () => {
        const result = mergeSortedArrays([], [1, 2, 3])
        expect(result).toEqual([1, 2, 3])
    })
    it('Second array is empty, returns first array', () => {
        const result = mergeSortedArrays([4, 5], [])
        expect(result).toEqual([4, 5])
    })

    it('Case1', () => {
        const result = mergeSortedArrays([4, 5], [3, 4])
        expect(result).toEqual([3, 4, 4, 5])
    })

    it('Case2', () => {
        const result = mergeSortedArrays([1, 4, 5, 8], [3, 4])
        expect(result).toEqual([1, 3, 4, 4, 5, 8])
    })
})