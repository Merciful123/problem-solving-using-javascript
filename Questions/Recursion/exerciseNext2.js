// Recursion CHALLENGE Problem Set Solutions Part 2
// capitalizeWords Solution
// Q:-- Write a recursive function called capitalizeFirst. Given an array of strings, capitalize the first letter of each string in the array.

function capitalizeWords(array) {
  if (array.length === 1) {
    return [array[0].toUpperCase()];
  }
  let res = capitalizeWords(array.slice(0, -1));
  res.push(array.slice(array.length - 1)[0].toUpperCase());
  return res;
}

console.log(capitalizeWords(["aamir", "alina", "danish"]));

const capitalizeWordsRevise = (arr) => {
  if (arr.length === 1) {
    return [arr[0].toUpperCase()];
  }

  let result = capitalizeWordsRevise(arr.slice(0, -1));
  result.push(arr.slice(arr.length - 1)[0].toUpperCase());
  return result;
};

console.log(capitalizeWordsRevise(["new delhi", "mecca"]));

// nestedEvenSum Solution

function nestedEvenSum(obj, sum = 0) {
  for (var key in obj) {
    if (typeof obj[key] === "object") {
      sum += nestedEvenSum(obj[key]);
    } else if (typeof obj[key] === "number" && obj[key] % 2 === 0) {
      sum += obj[key];
    }
  }
  return sum;
}
console.log(nestedEvenSum({ 1: 2, 2: 4, 3: 9 }));

const nestedEvenSumRevise = (obj, sum = 0) => {
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      sum += nestedEvenSumRevise(obj[key]);
    } else if (typeof obj[key] === "number" && obj[key] % 2 === 0) {
      sum += obj[key];
    }
  }
  return sum;
};

console.log(nestedEvenSumRevise({ 1: 2, 2: 4, 3: 9 }));

// capitalizeFirst Solution

function capitalizeFirst(array) {
  if (array.length === 1) {
    return [array[0][0].toUpperCase() + array[0].substr(1)];
  }
  const res = capitalizeFirst(array.slice(0, -1));
  const string =
    array.slice(array.length - 1)[0][0].toUpperCase() +
    array.slice(array.length - 1)[0].substr(1);
  res.push(string);
  return res;
}
console.log(capitalizeFirst(["aman", "naman"]));

const capitalizeFirstRevise = (arr) => {
  if (arr.length === 1) {
    return [arr[0][0].toUpperCase() + arr[0].substr(1)];
  }

  let result = capitalizeFirstRevise(arr.slice(0, -1));
  result.push(
    arr.slice(arr.length - 1)[0][0].toUpperCase() +
      arr.slice(arr.length - 1)[0].substr(1)
  );

  return result;
};

console.log(capitalizeFirstRevise(["aman", "naman"]));

// stringifyNumbers Solution

function stringifyNumbers(obj) {
  var newObj = {};
  for (var key in obj) {
    if (typeof obj[key] === "number") {
      newObj[key] = obj[key].toString();
    } else if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
      newObj[key] = stringifyNumbers(obj[key]);
    } else {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}
console.log(stringifyNumbers({ 1: 2, 2: 4, 3: 9 }));


const stringifyNumbersRevise = (obj) => {
  let newObj = {}
  for (let key in obj) {
    if (typeof obj[key] === "number") {
      newObj[key] = obj[key].toString()
    }
    else if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
      newObj[key] = stringifyNumbersRevise(obj[key])
    } else {
      newObj[key] = obj[key]
    }
  }
  return newObj
}

console.log(stringifyNumbersRevise({ 1: 2, 2: 4, 3: 9 }));

// collectStrings Solution: Helper Method Recursion Version

function collectStrings(obj) {
  var stringsArr = [];

  function gatherStrings(o) {
    for (var key in o) {
      if (typeof o[key] === "string") {
        stringsArr.push(o[key]);
      } else if (typeof o[key] === "object") {
        return gatherStrings(o[key]);
      }
    }
  }

  gatherStrings(obj);

  return stringsArr;
}
// collectStrings Solution: Pure Recursion Version

function collectStrings(obj) {
  var stringsArr = [];
  for (var key in obj) {
    if (typeof obj[key] === "string") {
      stringsArr.push(obj[key]);
    } else if (typeof obj[key] === "object") {
      stringsArr = stringsArr.concat(collectStrings(obj[key]));
    }
  }

  return stringsArr;
}

console.log(collectStrings({ 1: "name", 2: "age", a: "ds" }));

const collectStringsRevise = (obj) => {
  let string = []
  for (let key in obj) {
    if (typeof obj[key] === "string") {
      string.push(obj[key])
    }
    else if (typeof ob[key] === "object") {
      string.concat(collectStringsRevise(obj[key]))
    }
  }
  return string
}

console.log(collectStringsRevise({ 1: "name", 2: "age", a: "ds" }));

const capFirst = (arr) => {
  // write code for base case, if length === 0 return empty array
  if (arr.length === 0) {
    return [];
  }

  //  write code for first word capitalization
  let firstWord = arr[0][0].toUpperCase() + arr[0].slice(1);

  //  now pass next elements to function recursively
  let nextWords = capFirst(arr.slice(1));

  return [firstWord, ...nextWords];
};
// console.log(capFirst(["akram", "zulfi"]))

console.log(capFirst(["danish", "aamir"]))

const capFirstRevise = (arr) => {
  
  if (arr.length === 0) {
    return []
  }

  let firstWord = arr[0][0].toUpperCase() + arr[0].slice(1)
  
  let nextWord = capFirstRevise(arr.slice(1))

  return [firstWord, ...nextWord]
}

console.log(capFirstRevise(["aamir", "danish"]))