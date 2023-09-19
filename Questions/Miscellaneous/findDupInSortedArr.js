

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
      console.log("first")
    }
  }
  //   return duplicate;
  return [duplicate, reducedWithDuplicate];
};



const findDupInSortedArr1 = (arr) => {
  if (!Array.isArray(arr)) throw new Error('Input is not an array');

  let duplicate = []
  
  let withoutDuplicate = []

  for (let i = 0; i < arr.length; i++) {
    if (i < arr.length - 1) {
      if (arr[i] === arr[i + 1]) {
        duplicate.push(arr[i]);
      }
      if (arr[i] !== arr[i + 1]) {
        withoutDuplicate.push(arr[i]);
      }  
    } else {
      withoutDuplicate.push(arr[i])
    }
    
  }
  console.log("first")
  return [duplicate, withoutDuplicate]
}

console.log(findDupInSortedArr1());
