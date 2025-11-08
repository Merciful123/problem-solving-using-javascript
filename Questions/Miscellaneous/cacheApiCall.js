const cachedApiCall = (cacheTime) => {
  let cacheResult = new Map();
  console.log(cacheTime);

  

  return async (url, options) => {
    
      console.log("sec0", url)

    const cacheKey = JSON.stringify({ url, options });

    const currentTime = new Date().getSeconds();

    console.log(currentTime ?? "NA");

    // check if we have a cached response and if it's still valid.

    if (cacheResult.has(cacheKey)) {
      const { data, timestamp } = cacheResult.get(cacheKey);

      console.log(timestamp ?? "NA");
      console.log(currentTime ?? "NA");

      if (currentTime - timestamp < cacheTime) {
        return data;
      } else {
        cacheResult.delete(cacheKey);
      }
    }

    try {
      console.log("making api call");

      console.log(currentTime ?? "NA");

      // make the actual API call

      console.log("sec", url)

      const response = await fetch(url, options);
      const data = response.json();

      // store the response in cache with timestamp

      cacheResult.set(cacheKey, { data, timestamp: currentTime });

      return data;

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

