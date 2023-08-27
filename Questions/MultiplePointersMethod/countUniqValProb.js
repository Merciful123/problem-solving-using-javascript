function countUniqueValues(arr) {
  if (arr.length === 0) {
    return 0;
  }
  let count = 1;
    for (let i = 1, j = 0; i < arr.length; i++) {
    //   console.log(i)
    if (arr[j] !== arr[i]) {
      count++;
        j = i;
        // console.log(i)
    }
  }
  return count;
}

// console.log(countUniqueValues([4, 4, 5, 6, 6, 7, 9, 11, 12, 12, 12, 12]));


function freqCounter(arr) {
    if (arr.length === 0) {
        return 0
    }

    let firstPoint = 0

    for (let secondPoint = 1; secondPoint < arr.length; secondPoint++){
        if (arr[firstPoint] !== arr[secondPoint]) {
            firstPoint++
            arr[firstPoint] = arr[secondPoint]
        }
    }
    return firstPoint +1
}

console.log(freqCounter([4, 4, 5, 6, 6, 7,  11, 12, 12, 12, 12]));