const nemo = ['nemo']
//const nemo = new Array(10).fill('nemo')

function findNemo(array) {
    // let t0 = performance.now() // needs DOM
    for (let i = 0; i < nemo.length; i++) {
        if (array[i] === 'nemo') console.log('found NEMO!\n')
    }
    // let t1 = performance.now() // needs DOM
    //console.log(`Function took ${t1 - t0} ms to run.`)
}

// 1 operation: getting value from array[idx]
// 2 operation: comparing extracted value to string 'nemo'

// i iterations (length of array)
// + 2 operations
// O(n+2) = O(n)
// Linear Time Complexity

findNemo(nemo)
