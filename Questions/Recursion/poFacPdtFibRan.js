// POWER SOLUTION

// Q :-- Write a function called power which accepts a base and an exponent. The function should return the power of the base to the exponent. This function should mimic the functionality of Math.pow()  - do not worry about negative bases and exponents.


function power(base, exponent){
    if (exponent === 0) return 1;
    if (exponent < 0) {
        return 1/(base * power(base, -exponent))
    }
    return base * power(base,exponent-1);
}


const powerRevise = (base, exponent) => {
    if (exponent === 0) return 1

    if (exponent < 0) {
        return 1/( base * power( base , - exponent))
    }
    return base * power (base, exponent )

}
// console.log(powerRevise(2,4))
// console.log(power(2,-4))


// Q:--Write a function factorial which accepts a number and returns the factorial of that number. A factorial is the product of an integer and all the integers below it; e.g., factorial four ( 4! ) is equal to 24, because 4 * 3 * 2 * 1 equals 24.  factorial zero (0!) is always 1.


// FACTORIAL SOLUTION
function factorial(x) {
   if (x < 0 ) return 0;
   if (x <= 1 ) return 1;
   return x * factorial(x-1);
}


const factorialRevise = (num) => {
    if(num < 0) return "negative input, enter positive one"
    if (num === 1 || num === 0) return 1
    return num * factorialRevise(--num)
}
// console.log(factorialRevise(-23))

// console.log(factorial(4))
// PRODUCT OF ARRAY SOLUTION
function productOfArray(arr) {
    if(arr.length === 0) {
        return 1;
    }
    return arr[0] * productOfArray(arr.slice(1));
}


//Q:-- Write a function called productOfArray which takes in an array of numbers and returns the product of them all.

const productOfArrayRevise = (arr) => {
    if(!Array.isArray(arr)) return "not an array"
    if( arr.length ===0) return 1

    return  arr[0] * productOfArrayRevise(arr.slice(1))
}
// console.log(productOfArrayRevise([1,2,3,4]))

// RECURSIVE RANGE SOLUTION

//Q:-- Write a function called recursiveRange which accepts a number and adds up all the numbers from 0 to the number passed to the function 

function recursiveRange(x){
   if (x === 0 ) return 0;
   return x + recursiveRange(x-1);
}

const recursiveRangeRevise = (num) => {
    if(num < 0 ) return "invalid input"
    if (num === 0) return 0
    return num + recursiveRangeRevise(--num)
}

// console.log(recursiveRangeRevise(-4))



// FIBONACCI SOLUTION


//Q:-- Write a recursive function called fib which accepts a number and returns the nth number in the Fibonacci sequence. Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ... which starts with 1 and 1, and where every number thereafter is equal to the sum of the previous two numbers.



function fib(n){
    if (n <= 2) return 1;
    return fib(n-1) + fib(n-2);
}

console.log(fib(6))

const FIBONACCI = (num, memo = {}) => {

    if (num <= 2) return 1

    if (memo[num]) {
        return memo[num]
    }

    return memo[num] = fib(num - 1, memo) + fib(num - 2, memo)

}

console.log(FIBONACCI(6));