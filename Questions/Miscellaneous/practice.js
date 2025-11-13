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


function cachedApiCall (cacheTime) {

    let cacheResult = new Map();
    console.log(cacheTime)

    return async (url, options) =>{

        console.log("sec0", url)
        
        let cacheKey = JSON.stringify({url, options});

        let currentTime = new Date().getSeconds();

        console.log(currentTime ?? "NA");
        
        // check cache first before network request

        if(cacheResult.has(cacheKey)){
            const {data, timeStamp} = cacheResult.get(cacheKey);

            console.log(timeStamp ?? "NA");
            console.log(currentTime ?? "NA");

            if(currentTime - timeStamp < cacheTime){
                return data;
            }else{
                cacheResult.delete(cacheKey);
            }
        }

        // writing code for API call first
        
        try{
            
            console.log("making api call")
            console.log(currentTime)

            const response = await fetch(url, options);

            console.log("sec", url)
            
            const data = response.json();
            
            cacheResult.set(cacheKey, {data: data, timeStamp: currentTime})

            return data;

        } catch(error){
            console.log(error)
        }   
    }
}


const call = cachedApiCall(1500);

call("https://jsonplaceholder.typicode.com/todos/1", {}).then((a) =>
  console.log("1", a)
);

// This will make a network call and log "1" with the data.

setTimeout(() => {
  call("https://jsonplaceholder.typicode.com/todos/1", {}).then((a) =>
    console.log("2", a)
  );
}, 800);

// This will use the cache and log "2" with the same data.

setTimeout(() => {
  call("https://jsonplaceholder.typicode.com/todos/1", {}).then((a) =>
    console.log("3", a)
  );
}, 1700);

// This will make a new network call because the cache is expired, and log "3" with the data (which might be the same or different).

