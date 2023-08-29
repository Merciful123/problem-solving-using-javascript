function areThereDuplicates() {
  let count = {};
  for (let i = 0; i < arguments.length; i++) {
    count[arguments[i]] ? count[arguments[i]]++ : (count[arguments[i]] = 1);
  }
  console.log(count);

  for (let i in count) {
    if (count[i] > 1) {
      return true;
    }
  }

  return false;
}

// console.log(areThereDuplicates(1, 2, 3, 4, 10, 10));


// other method
function areThereDuplicates() {
  
  const frequencyCounter = {};
  for (let arg of arguments) {
    // first time it is false as no elements in FrequencyCounter
    if (frequencyCounter[arg]) {
      return true;
    }
    // this adds element in frequency counter
    frequencyCounter[arg] = 1;
  }
  return false;
}

// Test cases
console.log(areThereDuplicates(1, 2, 3,1)); // false
