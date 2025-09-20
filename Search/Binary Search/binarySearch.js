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



// find the first and last indice of an element in an array.

function findIndex(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  let first = -1;
  let last = -1;

  // searching for the first and 
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) {
      first = mid;
      end = mid - 1;
    } else if (arr[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  start = 0;
  end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) {
      last = mid;
      start = mid + 1;
    } else if (arr[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return [first, last];
}

// console.log(findIndex([1, 2,2, 2, 3, 4, 5,6,6],9))

function findIndexOfElement(arr, target) {

  function binarySearch(isFirst) {
    let start = 0,
      end = arr.length,
      result = -1;

    while (start <= end) {
      let mid = Math.floor((start + end) / 2);

      if (arr[mid] === target) {
        result = mid;
        if (isFirst) {
          end = mid - 1;
        } else {
          start = mid + 1;
        }
      } else if (arr[mid] < target) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
    return result;
  }
  let first = binarySearch(true);
  let last = binarySearch(false);

  return [first, last];
}


// console.log(findIndexOfElement([-2,-1,-1,0,1, 2, 3, 3,4,4,5], -1));
























