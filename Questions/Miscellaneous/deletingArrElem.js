arr1 = [1, 2, 3, 4, 5];

let val = 1;

let count = 0;

var reducedLength = false;
for (let i = 0; i < arr1.length; i++) {
  if (arr1[i] != val) {
    arr1[count++] = arr1[i];
    // console.log(count)
    // console.log(arr1[count])
  } else {
    reducedLength = true;
  }
}

if (reducedLength) {
  arr1.length -= 1;
}

console.log(arr1);
