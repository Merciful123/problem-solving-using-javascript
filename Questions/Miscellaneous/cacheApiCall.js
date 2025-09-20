const cachedApiCall = () => {

  let cacheResult = new Map();
  console.log()

  return async function cached(url, options) {

    console.log(url, options);

    const {key, timstamp} = {url ,options}

    try {
      // const result = await cached(url);
      // console.log(result.json());
      console.log("first")
    } catch (e) {
      console.log("error:- ", e);
    }
  };
};

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
