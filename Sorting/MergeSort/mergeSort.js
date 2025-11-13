function mergeSort(arr) {
  // Base case: array of length 1 is already sorted
  if (arr.length <= 1) {
    return arr;
  }

  // Step 1: Split array into two halves
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  // Step 2: Recursively sort both halves
  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  // Step 3: Merge the sorted halves
  return merge(sortedLeft, sortedRight);
}

// Helper function to merge two sorted arrays
function merge(left, right) {
  const result = [];
  let i = 0, j = 0;

  // Compare elements from both arrays and push the smaller one
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  // Add remaining elements (if any)
  return result.concat(left.slice(i)).concat(right.slice(j));
}

// Example usage:
const arr = [38, 27, 43, 3, 9, 82, 10];
console.log("Original:", arr);
console.log("Sorted:", mergeSort(arr));



// For [38, 27, 43, 3]

// Split -> [38, 27] and [43, 3]
// Split again -> [38], [27], [43], [3]
// Merge -> [27, 38] and [3, 43]
// Final merge -> [3, 27, 38, 43]
