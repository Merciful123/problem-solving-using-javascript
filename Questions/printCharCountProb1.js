function printCharCount(str) {
  // make object to return at end

  var charCountObj = {};

  //  loop over string for each character...

  for (var i = 0; i < str.length; i++) {
    var char = str[i].toLowerCase();
    //  if the char is a number/letter AND is a key in object, add one to count
    if (/[a-z0-9]/.test(char)) {
      if (charCountObj[char] > 0) {
        charCountObj[char]++;
      }
      // if the char is a number/letter AND not in object, add it to object and add one
      else {
        charCountObj[char] = 1;
      }
    }
  }
  return charCountObj;
  //  if character is something else (space, period, ect.) don't do anything
  // return object at end
}

// console.log(printCharCount("helloe !"))

//  Second method

function CharCount(str) {
  var obj = {};
  for (var char of str) {
    char = char.toLowerCase();
    if (isAlphaNum(char)) {
      obj[char] = ++obj[char] || 1; // if obj[char] available in obj then ++ otherwise add 1.
    }
  }
  return obj;
}

function isAlphaNum(char) {
  const code = char.charCodeAt(0); // or can also omit 0 from argument in charCodeAt
  if (
    !(code > 47 && code < 58) &&
    !(code > 64 && code < 91) &&
    !(code > 96 && code < 123)
  ) {
    return false;
  }
  return true;
}

console.log(CharCount(" he llopw ! 892"));

// practice

const charCountObj1 = (str) => {
  const isAlphaNumNew = (str)=> {
    const character = str.charCodeAt(0);
    if (
      !(character > 47 && character < 58) &&
      !(character > 64 && character < 91) &&
      !(character > 96 && character < 123)
    )
      return false;
    return true;
  }
  let countObj = {};

  for (let chr of str) {
    chr = chr.toLowerCase();
    if (isAlphaNumNew(chr)) countObj[chr] = (countObj[chr] || 0) + 1;
  }

  return countObj;
};



console.log(charCountObj1("aamir 3@#0 120-"))
