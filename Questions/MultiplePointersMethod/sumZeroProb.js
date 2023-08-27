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
console.log(sumZeroProb([ -2, -1, 0, 1, 2, 3, 4, 5]));


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