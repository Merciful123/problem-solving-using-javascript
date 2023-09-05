// averagePair Solution

 

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
