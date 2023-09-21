// Reverse Solution

// Write a recursive function called reverse which accepts a string and returns a new string in reverse.

function reverse(str){
	if(str.length <= 1) return str;
	return reverse(str.slice(1)) + str[0];
}

// console.log(reverse("first"))

const reverseRevise = (str) => {
  if( str.length <= 1) return str
  return reverseRevise(str.slice(1)) + str[0]

}

// console.log(reverseRevise("first"))



let names = "aamir"
// console.log(names.slice(1,-1))

// Q:--Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome (reads the same forward and backward). Otherwise it returns false.


function isPalindrome(str) {
    if(str.length === 1) return true;
    if(str.length === 2) return str[0] === str[1];
    if(str[0] === str.slice(-1)) return isPalindrome(str.slice(1,-1))
    return false;
}


// think about to just check base cases 1 and 2
const isPalindromeRevise = (str) => {
  
  if (str.length === 1) return true  // first base case
  if (str.length === 2) return str[0] === str[1]  // second base case
  
  if(str[0]=== str.slice(-1)) return isPalindromeRevise(str.slice(1,-1))
  return  false
}

console.log(isPalindromeRevise("ramar"))

// little change
 

function isPalindrome(str){
  // add whatever parameters you deem necessary - good luck!
  if(str.length === 1 ) {
      return true
  }
  if( str.length === 2){
      return str[0] === str[1]
  }
  if(str[0] === str[str.length-1]){
      return isPalindrome(str.slice(1, -1))
  }
  return false  
}


// someRecursive Solution

// Q:--Write a recursive function called someRecursive which accepts an array and a callback. The function returns true if a single value in the array returns true when passed to the callback. Otherwise it returns false.

function someRecursive(array, callback) {
    if (array.length === 0) return false;
    if (callback(array[0])) return true;
    return someRecursive(array.slice(1),callback);
}


// some changes in above


const someRecursiveRevise = (arr, callback) => {
  if (arr.length === 0) return false
  if (callback(arr[0])) return true
  return someRecursiveRevise(arr.slice(1), callback) 

}

console.log(someRecursiveRevise([1, 2, 3, 4], (a) => a > 9));


const isGreat10 = (a) => a > 10;

function someRecursive2(arr, isGreat10) {
  // add whatever parameters you deem necessary - good luck!

  if (arr.length === 0) {
    return false;
  }
  if (isGreat10(arr[0])) {
    return true;
  }
  return someRecursive2(arr.slice(1), isGreat10);
}



// flatten Solution
// Q:--   Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.


function flatten(oldArr){
  var newArr = []
  	for(var i = 0; i < oldArr.length; i++){
    	if(Array.isArray(oldArr[i])){
      		newArr = newArr.concat(flatten(oldArr[i]))
    	} else {
      		newArr.push(oldArr[i])
    	}
  } 
  return newArr;
}


const flattenRevise = (arr) => {
  let newArr = []
  for (let i = 0; i < arr.length; i++){
    if (Array.isArray(arr[i])){
      newArr = newArr.concat(flatten(arr[i]))
    }
    else {
      newArr.push(arr[i]);
    }
  }
  return newArr
}

// console.log(flattenRevise([[1,2,3],[4,5,6],[0]]))














