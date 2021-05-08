/*
Given 2 arrays that are sorted, can you merge both into one sorted array?

- inputs are an array of integers
- the arrays are always sorted
- you will always receive 2 arrays as inputs
*/

function mergeSortedArrays(arr1, arr2) {
    if (arr1.length === 0) return arr2
    if (arr2.length === 0) return arr1

    let newSortedArray = []
    let p1 = 0
    let p2 = 0
    while (true) {
        let item1 = arr1[p1]
        let item2 = arr2[p2]

        if (newSortedArray.length === arr1.length + arr2.length) return newSortedArray

        if (item1 === item2) {
            newSortedArray.push(item1)
            newSortedArray.push(item2)

            p1++
            p2++
        } else {
            if (!item2 || item1 < item2) {
                newSortedArray.push(item1)
                p1++
            } else {
                newSortedArray.push(item2)
                p2++
            }
        }
    }
}

module.exports = mergeSortedArrays
