//  Naive approach, n**2 time complexity
function maxSumProb(arr, num) {
  if (num > arr.length) {
    return null;
  }
  let maxSum = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i++) {
    let sum = 0;
    for (let j = 0; j < num; j++) {
      sum += arr[i + j];
    }
    if (sum > maxSum) {
      maxSum = sum;
    }
    console.log(maxSum, sum);
  }
  return maxSum;
}
// console.log(maxSumProb([1, 2, 3, 4, 5, 6, 7, 8, 8], 2));

// Sliding window pattern -  O(n) complexity

function maxSum(arr, num) {
    if (num > arr.length) {
        return null
    }

    // create a window like pattern of sum of numbers

    let max = 0
    let tempMax = 0

    for (let i = 0; i < num; i++){
        tempMax += arr[i] 
    }
    max = tempMax

  //  now slide window and substract left element and add next one through entire array
    for (let i = num; i < arr.length; i++){
        tempMax = tempMax - arr[i-num] + arr[i]
        newMax = Math.max(tempMax, max)

    }
    return newMax
}
console.log(maxSum([1, 2, 3, 4, 5, 6, 7, 8], 2));