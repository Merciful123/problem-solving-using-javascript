const findDupInSortedArr = (arr) => {
  let reducedWithDuplicate = [];
  let duplicate = [];

  for (let i = 0; i < arr.length; i++) {
    if (i < arr.length - 1) {
      if (arr[i] !== arr[i + 1]) {
        reducedWithDuplicate.push(arr[i]);
      }
      if (arr[i] === arr[i + 1]) {
        duplicate.push(arr[i]);
      }
    } else {
      reducedWithDuplicate.push(arr[i]);
    }
  }
  //   return duplicate;
  return [duplicate, reducedWithDuplicate];
};

console.log(findDupInSortedArr([3, 7,  5]));
