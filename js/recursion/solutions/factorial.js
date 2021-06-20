/*
    Write 2 functions that finds the factorial of any number.
        1 - iteration
        2 - recursion
*/

function recursiveFactorial(num) {
    if (num === 2) {
        return 2
    }

    return num * recursiveFactorial(num - 1)
}

function iterationFactorial(num) {
    if (num === 2) {
        return 2
    }

    let res = 1    
    for (let n = 1; n <= num; n++) {
        res *= n;
    }
    return res
}

recursiveFactorial(5, 5)

module.exports = {
    recursiveFactorial,
    iterationFactorial
}