// Original Solution
function binarySearch(arr, elem) {
  var start = 0;
  var end = arr.length - 1;
  var middle = Math.floor((start + end) / 2);
  while (arr[middle] !== elem && start <= end) {
    if (elem < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
  }
  if (arr[middle] === elem) {
    return middle;
  }
  return -1;
}

// Refactored Version
function binarySearch(arr, elem) {
  var start = 0;
  var end = arr.length - 1;
  var middle = Math.floor((start + end) / 2);
  while (arr[middle] !== elem && start <= end) {
    if (elem < arr[middle]) end = middle - 1;
    else start = middle + 1;
    middle = Math.floor((start + end) / 2);


  }
  return arr[middle] === elem ? middle : -1;
}

console.log(binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 13))

// revision

const binarySearchRevise = (arr, elem) => {
  
  let start = 0

  let end = arr.length - 1
  
  let middle = Math.floor((start + end)/2)

  while (arr[middle] !== elem && start <= end) {
    
    if (elem > arr[middle]) start = middle + 1
    
    else end = middle - 1

    middle = Math.floor((start + end) / 2)

  }
  return arr[middle] === elem ? middle : -1

}

console.log(binarySearchRevise([2, 5, 6, 9, 13, 15, 28, 30], 13));




























