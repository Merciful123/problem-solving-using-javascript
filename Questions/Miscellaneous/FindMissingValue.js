//  Find a missing value from 1 to 1000

function FindMissingValue(arr, numberOfItems) {

    let sumWithoutMissing = 0

    if( numberOfItems === arr.length) return "no missing value"

    for (let i = 0; i < arr.length; i++){
        sumWithoutMissing += arr[i]
    }

    let total = (numberOfItems *( numberOfItems +1 ))/2

    let misssingNumber = total - sumWithoutMissing

    return misssingNumber
    
}


const FindMissingValue1 = (arr, totalNumber) => {

    if (arr.length === totalNumber) return "No missing Number"
    
    let sum = 0

    let total = 0

    for (let i = 0; i < arr.length; i++){
        sum += arr[i]
    }

    total = (totalNumber * (totalNumber + 1)) / 2
    
    return total - sum

}

// console.log(FindMissingValue1([1,  4, 5, 6, 7, 8, 9, 10], 10))





//  Finding max value from loop

const FindMaxValue = (arr) => {
    let maxValue = arr[0]

    for (let i = 0; i < arr.length; i++){
        if( arr[i] > maxValue) maxValue = arr[i]
    }

    return maxValue
}

console.log(FindMaxValue([1,2,3,4,5,10]))


const FindMaxValue1 = (arr) => {
    
    if(!Array.isArray) throw new Error("No array input given")

    let maxValue = arr[0]
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > maxValue) {
            maxValue = arr[i]
        }
    }
    return maxValue
    
}

console.log(FindMaxValue1([1,2,3,4,5,10]))















//  Finding minimum value, similar to above


const FindMinValue = (arr) => {
    let minValue = arr[0]
    for (let i = 0; i < arr.length; i++){
        minValue < arr[i] ? (minValue = minValue) : (minValue = arr[i]);
    }
    return minValue
}

console.log(FindMinValue([100, 1000,38,23,23]))
