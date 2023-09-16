// averagePair Solution

 
//Q:-- Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.

const findAveragePair = (arr, target) => {
  let start = 0
  let end = arr.length - 1
  
  if (arr.length ===0) return false

  while (start < end) {
    let average = (arr[start] + arr[end]) / 2
    
    if (average === target) return true
    else if (average < target) start++
    else end--
  }
  return false
}

console.log(findAveragePair([ 1,2,3,4,5], 3))


// isSubsequence Solution - Iterative




//Q:-- Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.


function isSubsequence(str1, str2) {
  let i = 0;
  let j = 0;
  if (!str1) return true;
  while (j < str2.length) {
    if (str2[j] === str1[i]) i++;
    if (i === str1.length) return true;
    j++;
  }
  return false;
}

// console.log(isSubsequence("hey", "he aamir"))



// isSubsequence Solution - Recursive but not O(1) Space


function isSubsequence(str1, str2) {
  if(str1.length === 0) return true
  if(str2.length === 0) return false
  if(str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1))  
  return isSubsequence(str1, str2.slice(1))
}
