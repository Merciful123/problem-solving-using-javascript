// --> Store the first element as the smallest value you've seen so far.

// --> Compare this item to the next item in the array until you find a smaller number.

// --> If a smaller number is found, designate that smaller number to be the new "minimum" and
//     continue until the end of the array.

// --> If the "minimum" is not the value (index) you initially began with, swap the two values.

// --> Repeat this with the next element until the array is sorted.

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[lowest] > arr[j]) {
        lowest = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[lowest];
    arr[lowest] = temp;
  }
  return arr;
};
// console.log(selectionSort([9, 3, 4, 0, -4,-9,34,4,5]));

const selectionSortNew = (arr) => {
  const swap = (arr, id1, id2) => {
    [arr[id1], arr[id2]] = [arr[id2], arr[id1]];
  };
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (j = i + 1; j < arr.length; j++) {
      if (lowest > arr[j]) {
        // swap(arr, lowest, j)
        // console.log(i,j)
        lowest = j;
      }
    }
    if (lowest !== i ) {
      swap(arr, lowest, i);
    }
  }
  return arr;
};

console.log(selectionSortNew([9, 3, 4, 5, 0, -9, 10]));
