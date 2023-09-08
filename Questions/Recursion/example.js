//  with iteration
const total = (num) => {
  let total = 1;

  for (let i = num; i > 1; i--) {
    total *= i;
  }
  return total;

};

// console.log(total(5));


//  with recursion

const factorial = (num) => {
    if (num === 1 || num === 0) return 1
    return num * factorial( --num)

}

// console.log(factorial(4))


// find odd value from Recursion(with helper function)


const findOddValue = (nums) => {
    let OddNums = []
    const helper = (helperInput) => {
        if (helperInput.length === 0) return ;
        if (helperInput[0] % 2 !== 0) {
          OddNums.push(helperInput[0]);
        }
        helper(helperInput.slice(1));
    }
    helper(nums)
    return OddNums
}
// console.log(findOddValue([]))


//  withiut helper function

const findOdd = (arr) => {
    let newArr = []
    if (arr.length === 0) {
        return []
  }
  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0])
  }
  return newArr.concat(findOdd(arr.slice(1)))
}

console.log(findOdd([]))
