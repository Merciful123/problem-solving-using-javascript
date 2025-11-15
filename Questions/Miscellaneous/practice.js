
function curry(fn){
    return function curried(...args){
        if(args.length >= fn.length){
            return fn.apply(this, args);
        }else{
           return (...nextargs)=> curried(...args, ...nextargs); 
        }
    }
    
}

// function curry (fn){
//     return function curried(...args){
//         if(args.length >= fn.length){
//             return fn.apply(this, args)
//         }else{
//             return function(...nextargs){
//                 return curried.apply(this, args.concat(nextargs))
//             }
//         }
//     }
// }




function join(a,b,c){
    return `${a}_${b}_${c}`
}
 
// const curriedJoin = curry(join)
// console.log("first")
// console.log(curriedJoin(1,2,3))
// console.log("second")
// console.log(curriedJoin(1,2)(3))
// console.log("third")
// console.log(curriedJoin(1)(2)(3))





function cachedApiCall(cacheTime) {
    let cacheResult = new Map();
    let callCount = 0;

    return async (url, options) => {
        callCount++;
        const callId = callCount;
        let cacheKey = JSON.stringify({url, options});
        let currentTime = Date.now();
        console.log("currentTime", currentTime)
        

        if (cacheResult.has(cacheKey)) {
            const cachedData = cacheResult.get(cacheKey);
            const timeDiff = currentTime - cachedData.timeStamp;
            console.log("cachee",cachedData.timeStamp)
            
            console.log(` Time difference: ${timeDiff}ms`);
            
            if (timeDiff < cacheTime) {
                console.log(`RETURNING CACHED DATA (${timeDiff}ms old)`);
                return cachedData.data;
            } else {
                console.log(` CACHE EXPIRED (${timeDiff}ms > ${cacheTime}ms)`);
                cacheResult.delete(cacheKey);
            }
        }

        try {
            const response = await fetch(url, options); 
            const result = await response.json();

            cacheResult.set(cacheKey, {
                data: result, 
                timeStamp: currentTime
            });
            
            return result;
        } catch(error) {
            console.log("API CALL FAILED:", error);
            throw error;
        }
    };
}

// Test the function
const call = cachedApiCall(1500);

console.log("=== TEST START ===");

// First call - should make API call
call("https://jsonplaceholder.typicode.com/todos/1", {})
    .then((a) => console.log("1", a))
    .catch(err => console.log("1 Error:", err));

// Second call after 800ms - should use cache
setTimeout(() => {
    call("https://jsonplaceholder.typicode.com/todos/1", {})
        .then((a) => console.log("2", a))
        .catch(err => console.log("2 Error:", err));
}, 800);

// Third call after 1700ms - cache should be expired, new API call
setTimeout(() => {
    call("https://jsonplaceholder.typicode.com/todos/1", {})
        .then((a) => console.log("3", a))
        .catch(err => console.log("3 Error:", err));
}, 1700);