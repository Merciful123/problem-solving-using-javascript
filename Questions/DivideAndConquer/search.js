const search = (arr, value) => {
  let min = 0;
  let max = arr.length - 1;

  if (!value) return "no value given to find";
  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    let currentValue = arr[middle];

    if (currentValue < value) {
      min = middle + 1;
    } else if (currentValue > value) {
      max = middle - 1;
    } else {
      return middle;
    }
  }
  return -1;
};
console.log(search([1, 2, 3, 4, 5, 10, 15], 15));

const search1 = (arr, num) => {
  if (!num) return "No number to find"
  let start = 0

  let end = arr.length - 1
  
  while (start <= end) {
    let mid = Math.floor((start + end) / 2)
    let average  = arr[mid]
    console.log(start, end)
    if (average < num) start = mid + 1
    else if (average > num) end = mid - 1
    
    else return mid


  }
  return -1

}
console.log(search1([1, 2, 3, 4, 5, 10, 15], 15));
