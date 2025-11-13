// function addUpTo(n) {
//   return n * (n + 1) / 2;
// }

// var time1 = performance.now();
// addUpTo(1000000000);
// var time2 = performance.now();
// console.log(`Time Elapsed: ${(time2 - time1) / 1000} seconds.`)

function isAnagram(str1, str2) {
  return (
    str1.split(" ").join("").split("").sort().join() ===
    str2.split(" ").join("").split("").sort().join()
  );
}

// console.log(isAnagram("aamir","raami"))

// using builtin methods

function findArrElemIndice(arr, target) {
  let first = arr.indexOf(target);
  let last = arr.lastIndexOf(target);
  console.log(first);
  console.log(last);

  return first === -1 ? [-1, -1] : [first, last];
}

// console.log(findArrElemIndice([1,2,3,4,1,5,5,6], 1))

// using for loop

const findElemIndice = (arr, target) => {
  let first = -1;
  let last = -1;

  for (let num = 0; num < arr.length; num++) {
    if (arr[num] === target) {
      if (first === -1) {
        first = num;
      }
      last = num;

      // console.log(first, last)
    }
  }
  return [first, last];
};

// console.log(findElemIndice([1,2,3,4,5,1], 1))



// creating array like structures from builtin methods.

// console.log(Array.from({length:3}, ()=> Array.from({length:5}, ()=>0)))

let result = []

for( let i= 0; i < 7; i++){
  result[i] = [];
  for (let j = 0; j < 7; j ++){
    result[i][j] = 0;
  } 
}

// console.table(result)

function pattern (n){
  for(let i = 1; i < n; i ++){
    let row = "";
    for(let j =1; j < i+1; j++ ){
      row += j + "" 

    }
    console.log(row)

  }
}

// pattern(7)

function newPatter (n){
  let row = "";
  for(let i = n; i >= 1; i--){
    row+= "*"
    console.log(row)
  }
}

// newPatter(4)

function invertedPattern(n) {
  let stars = "";  

  // Build full line of stars first
  for (let i = 0; i < n; i++) {
    stars += "*";
  }
  console.log(stars)
  // Now print reducing slices
  for (let i = n; i >= 1; i--) {
    // console.log(stars.slice(0, i));
  }
}

invertedPattern(5);
