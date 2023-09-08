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
console.log(search([1, 2, 3, 4, 5, 10, 15], 12));
