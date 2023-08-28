// ### Revision 1
//  Naive approach o(n2) complexity
function checkSquare(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false
    }

    for (const i of arr1) {
        let square = arr2.indexOf(i ** 2)
        if (square === -1) {
            return false
        }
    }
    return true

}

// console.log(checkSquare([1, 2, 3, 4], [1, 4, 9, 1]))

// Frequency counter method, o(n) complexity

const checkingSquare = (arr1, arr2) => {
    if (arr1.length !== arr2.length) {
        return false
    }
    let counter1 = {}

    let counter2 = {}


    for (let i of arr1) {
        // counter1[i] = (counter1[i] || 0) + 1
        counter1[i] ? (counter1[i]++) : (counter1[i] = 1)
    }

    for (let i of arr2) {
        // counter2[i] = (counter2[i] || 0) +1 
        counter2[i] ? (counter2[i]++) : (counter2[i] = 1)
    }
    console.log(counter1, counter2);

    for (let i in counter1) {
        if (!(i ** 2 in counter2)) {
         return false
        }   
        if (counter2[i**2] !== counter1[i] ** 2) {
            return false
        }
    }
    return true
}

// console.log(checkingSquare([2,1,3,5],[1,25,9,4]))


const validAnagram = (str1, str2) => {
    if (str1.length !== str2.length) {
        return false
    }

    let counter = {}

    for (let i = 0; i < str1.length; i++) {
        counter[i] ? counter[i]++ : counter[i] = 1
    }
    for (let j = 0; j < str2.length; j++){
        if (!(counter[j])) {
            return false
        }
    }
    return true
}

console.log(validAnagram("aamri", "raaim"))