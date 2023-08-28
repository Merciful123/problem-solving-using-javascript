//  Naive approach

function checkSquaredArrayElements(arr1, arr2) {
  // edge case
  if (arr1.length !== arr2.length) {
    return false;
  }
  // iterate over first array
  for (let i = 0; i < arr1.length; i++) {
    // check if it is in second array
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    // if not found then break out of loop and return false
    if (correctIndex === -1) {
      return false;
    }
    // else continue to next element in the array
    // decrease array elements
    // arr2.splice(correctIndex, 1);
    console.log(arr2);
  }
  return true;
}

// console.log(checkSquaredArrayElements([ 2,1, 3,4], [1, 4,16,9]));

//  Frequency Counter Method

function sameElementsSqaured(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  let freqCounter1 = {};
  let freqCounter2 = {};

  for (let val of arr1) {
    freqCounter1[val] = (freqCounter1[val] || 0) + 1;
  }

  for (let val of arr2) {
    freqCounter2[val] = (freqCounter2[val] || 0) + 1;
  }
  console.log(freqCounter1);
  console.log(freqCounter2);

  for (let key in freqCounter1) {
    if (!(key ** 2 in freqCounter2)) {
      return false;
    }
    if (freqCounter2[key ** 2] !== freqCounter1[key]) {
      return false;
    }
  }
  return true;
}

console.log(sameElementsSqaured([1, 2, 3], [1, 4, 9]));

//

function validAnagram(str1, str2) {
  //   edge case
  if (str1.length !== str2.length) {
    return false;
  }

  // object to compare anagram
  let obj = {};

  //    interating over first loop
  for (let i = 0; i < str1.length; i++) {
    const letter = str1[i];
    // checking whether the letter is present or not, if present increment 1 else add 1
    obj[letter] ? (obj[letter] += 1) : (obj[letter] = 1);
  }
  for (let i = 0; i < str2.length; i++) {
    // check if letter in str2 is present in str1 or not, if not return false
    const letter = str2[i];
    if (!obj[letter]) {
      return false;
    }
    // else {
    //   console.log(obj);

    //   obj[letter] -= 1;

    // }

  }
  return true;
}

// console.log(validAnagram("aamiar", "ramiaa"));
