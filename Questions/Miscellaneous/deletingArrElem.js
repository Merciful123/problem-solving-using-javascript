let arr = [1, 2, 3, 6, 6, 6]

let val = 1

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === val) {
    arr.splice(i, arr[i]);
  }
}

console.log(arr)
 