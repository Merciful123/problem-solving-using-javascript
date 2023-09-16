//Q:-- Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist


//  Naive Approach

function sumZeroProb(arr) {
    for (let i = 0; i < arr.length; i++){
        for (let j = i+1; j < arr.length; j++){
            if (arr[i] + arr[j] === 0) { 
                return [arr[i], arr[j]]
            }
        }
    }
}
console.log(sumZeroProb([-2, -1, 0, 1, 2, 3, 4, 5]));


// Multiple Pointers Method


function sumZero(arr) {
    let left = 0;

    let right = arr.length - 1
    
    while (left < right) {
        if (arr[left] + arr[right] === 0) {
            return [arr[left], arr[right]]
        } else if (arr[left] + arr[right] > 0) {
            right--
        } else {
            left++
        }
    }
    
}

// console.log(sumZero([-2,-1,0,1,3]))


const sumZero2 = (arr) => {
    let start = 0
    let end = arr.length -1

    while (start < end) {
        if (arr[start] + arr[end] === 0) return [arr[start], arr[end]]
        else if (arr[start] + arr[end] > 0) end--
        else start ++
    }
}

console.log(sumZero2([-2, -1, 0, 1, 2, 3, 4, 5]));
