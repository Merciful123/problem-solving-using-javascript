// POWER SOLUTION
function power(base, exponent){
    if (exponent === 0) return 1;
    if (exponent < 0) {
        return 1/(base * power(base, -exponent))
    }
    return base * power(base,exponent-1);
}

// console.log(power(2,-4))
// FACTORIAL SOLUTION
function factorial(x){
   if (x < 0 ) return 0;
   if (x <= 1 ) return 1;
   return x * factorial(x-1);
}
console.log(factorial(4))
// PRODUCT OF ARRAY SOLUTION
function productOfArray(arr) {
    if(arr.length === 0) {
        return 1;
    }
    return arr[0] * productOfArray(arr.slice(1));
}
// RECURSIVE RANGE SOLUTION
function recursiveRange(x){
   if (x === 0 ) return 0;
   return x + recursiveRange(x-1);
}
// FIBONACCI SOLUTION
function fib(n){
    if (n <= 2) return 1;
    return fib(n-1) + fib(n-2);
}


