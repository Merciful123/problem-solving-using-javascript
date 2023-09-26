// Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

function countUniqueValues(arr) {
  if (arr.length === 0) {
    return 0;
  }
  let count = 1;
  for (let i = 1, j = 0; i < arr.length; i++) {
    if (arr[j] !== arr[i]) {
      count++;
      j = i;
    }
  }
  return count;
}

console.log(countUniqueValues([4, 5, 13, 4, 6, 6, 7, 9, 11, 12, 14,15]))

const unique = (arr) => {
  if (arr.length === 0) return 0
  let count = 0
  for (let i = 1, j = 0; i < arr.length; i++) {
    if (arr[i] !== arr[j]) {
      count++
    }
    j = i
  }
  return count + 1
}
console.log(unique([4, 5, 13, 4, 6, 6, 7, 9, 11, 12,14,15]));


// Key differences between the two functions:

//  prefered above remember

// countUniqueValues doesn't modify the original array and uses a separate count variable to keep track of unique values.
// freqCounter modifies the original array in place to achieve the same result and uses the firstPoint variable to keep track of the count.
// Both functions have a time complexity of O(n), where n is the length of the input array, since they iterate through the array once. However, freqCounter has the side effect of modifying the input array, which might not be desirable in some situations.

function freqCounter(arr) {
  if (arr.length === 0) {
    return 0;
  }

  let firstPoint = 0;

  for (let secondPoint = 1; secondPoint < arr.length; secondPoint++) {
    if (arr[firstPoint] !== arr[secondPoint]) {
      firstPoint++;
      arr[firstPoint] = arr[secondPoint];
    }
  }
  return firstPoint + 1;
}

// console.log(freqCounter([4, 4, 5, 11, 12, 12, 12, 12]));
