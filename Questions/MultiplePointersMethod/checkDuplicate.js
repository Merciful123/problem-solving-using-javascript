// check duplicate o(n logn) because of sorted array
const checkDuplicate = (...args) => {
    //  sort arguments
    args.sort((a, b) => {
        if (a < b) return -1
        if (a > b) return 1
        return 0
    })

    let start = 0
    let next = 1
    while ( next < args.length) {
        if (args[start] === args[next]) {
            return true
        }
        start++, next++
    }
    return false
}

// console.log(checkDuplicate(1,2,3,4,5,15))


// one liner solution

function areThereDuplicates() {
  return new Set(arguments).size !== arguments.length;
}

// console.log(areThereDuplicates(1,2,3,4,5,5))

