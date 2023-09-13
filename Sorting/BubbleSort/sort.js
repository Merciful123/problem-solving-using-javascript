//  sorting naive approach

//  time comelexity: in general n2, however in sorted array case, best case time complexity may be linear time.

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        // we can swap either of the two varibles,
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        // let temp = arr[j+1]
        // arr[j+1] = arr[j]
        // arr[j] = temp
      }
      console.log(arr[j], arr[j + 1], arr);
    }
  }
  return arr;
}

// console.log(bubbleSort([3, 7, 2, 9, 1, 4, 8]))

// ** Bubble sort pseudocode

// --> start looping from with a variable called (i) the end of the array towards the beginning.
// --> start an inner loop with a variable called (j) from the beginning untill  (i-1)
// --> if array[j] is greater than array[j+1] swap those two values
// --> return the sorted array

const bubbleSortAlgo = (arr) => {
  var noSwaps;
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      console.log(arr[j], arr[j + 1], arr);
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    // console.log("one pass");
    if (noSwaps) break;
  }
  return arr;
};

// console.log(bubbleSortAlgo([9, 6, 3, 7, 1, 4, 8]));

// es5 version of this code

const bubbleSort2 = (arr) => {
  const swap = (arr, id1, id2) => {
    [arr[id1], arr[id2]] = [arr[id2], arr[id1]];
  };
  var noSwaps;
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true; // short circuit to break the loop
    for (j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        noSwaps = false; // here make it true to avoid unnecessary loops
      }
      console.log(arr, arr[j], arr[j + 1]);
      console.log("first pass");
    }
    if (noSwaps) break;
  }
  return arr;
};
console.log(bubbleSort2([1, 2, 3, 4, 5, 6, 7]));
