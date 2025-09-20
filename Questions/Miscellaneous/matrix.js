// write a function to transpose a matrix

const transposeMatrix = (arr)=> {
  const rows = arr.length;
  const cols = arr[0].length;

//   const resultArr = Array.from({ length: cols }, () => Array(rows).fill(0));
//   let resultArr = [];

//   for(let i= 0; i < cols; i++){
//     resultArr[i] = Array(rows).fill(0)
//   } 

  let resultArr = [];
  
  for(let i = 0; i < cols; i++){
    resultArr[i] = [];
    for (let j= 0; j < rows; j++){
        resultArr[i][j] = 0;
    } 
  }


  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      resultArr[j][i] = arr[i][j];
    }
  }

  return resultArr;
}

const mar = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]

// console.table(transposeMatrix(mar));

const transpose = (matrix) => {
    const rows = matrix.length;
    const cols = matrix[0].length;

    // Create a new matrix with swapped dimensions
    const result = Array.from({ length: cols }, () => Array(rows).fill(0));

    // Fill the result matrix
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            result[j][i] = matrix[i][j]; // Swap rows & columns
        }
    }

    return result;
};

// Test
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
// console.log(transpose(matrix));
// console.log(Array.from({length: 3},()=>[Array.from({length:4},()=>(0))]));

// console.log(Array.from({length:3}, ()=> Array(2).fill(0)))

// console.log(Array(5).fill(7))

// console.log(Array(3).fill(Array(3).fill(0)))

// console.log(Array.from({length:3}, ()=> Array.from({length:3},()=>0)))



function fibTabulation(n) {
    if (n <= 1) return n;
    
    const dp = [0, 1];
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    
    return dp[n];
}

console.log(fibTabulation(6))