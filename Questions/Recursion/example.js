//  with iteration
const total = (num) => {
  let total = 1;

  for (let i = num; i > 1; i--) {
    total *= i;
  }
  return total;
};

// console.log(total(5));




const total1 = (num) => {
  if (!num || typeof num !== "number") throw new Error("Invalid input");
  let result = 1;
  for (let i = num; i > 1; i--) {
    result *= i;
  }
  return result;
};

// console.log(total1(5));

//  with recursion

const factorial = (num) => {
  if (num === 1 || num === 0) return 1;
  return num * factorial(--num);
};

// console.log(factorial(5))

const factorial1 = (num) => {
  if (!num || typeof num !== "number") throw new Error("invalid input");

  if (num === 1 || num === 0) return 1;

  return num * factorial1(--num);
};

// console.log(factorial1(5));

// find odd value from Recursion(with helper function)

const findOddValue = (nums) => {
  let OddNums = [];
  const helper = (helperInput) => {
    if (helperInput.length === 0) return;
    if (helperInput[0]  === nums[0]) {
      OddNums.push(helperInput[0]);
    }
    helper(helperInput.slice(1));
  };
  helper(nums);
  return OddNums[0];
};
console.log(findOddValue([1,1,2,2,4]))

const findOddvalueRevision = (arr) => {
  if (!Array.isArray(arr)) throw new Error("invalid input");
  let result = [];
  const helper = (helperInput) => {
    if (helperInput.length === 0) return;
    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }
    helper(helperInput.slice(1));
  };
  helper(arr);
  return result;
};

// console.log(findOddvalueRevision([1, 2, 3, 4]));

//  withiut helper function

const findOdd = (arr) => {
  let newArr = [];
  if (arr.length === 0) {
    return [];
  }
  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }
  return newArr.concat(findOdd(arr.slice(1)));
};
// console.log(findOdd([1, 2, 3, 4]));

const findOddRevision = (arr) => {
  if (!Array.isArray(arr)) throw new Error("invalid input");
  let oddValue = [];

  if (arr.length === 0) return oddValue

  if (arr[0] % 2 !== 0) oddValue.push(arr[0]);

  return oddValue.concat(findOddRevision(arr.slice(1)));
};
console.log(findOddRevision([86,7]));

// console.log(findOdd([]))

const findOddRevision1 = (arr, oddValue = []) => {
  if (!Array.isArray(arr)) throw new Error("Invalid input");

  if (arr.length === 0) {
    return oddValue; // Return the accumulated odd values
  }

  if (arr[0] % 2 !== 0) {
    oddValue.push(arr[0]); // Add odd values to the accumulator
  }

  return findOddRevision1(arr.slice(1), oddValue); // Recur with the remaining array and the accumulator
};

console.log(findOddRevision1([1, 2, 3, 4]));
