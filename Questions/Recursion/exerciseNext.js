// Reverse Solution

function reverse(str){
	if(str.length <= 1) return str;
	return reverse(str.slice(1)) + str[0];
}

let names = "aamir"
console.log(names.slice(1,-1))


function isPalindrome(str) {
    if(str.length === 1) return true;
    if(str.length === 2) return str[0] === str[1];
    if(str[0] === str.slice(-1)) return isPalindrome(str.slice(1,-1))
    return false;
}

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

function someRecursive(array, callback) {
    if (array.length === 0) return false;
    if (callback(array[0])) return true;
    return someRecursive(array.slice(1),callback);
}


// some changes in above

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