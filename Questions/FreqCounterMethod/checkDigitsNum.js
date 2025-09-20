//Q:-- Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.



function sameFrequency(num1, num2) {
  
  let snum1 = num1.toString()
    let snum2 = num2.toString()
    if (snum2.length !== snum1.length) {
    return false;
  }
  
  let counter = {};    

  for (let i = 0; i < snum1.length; i++) {
    let letter = snum1[i];
    counter[letter] ? counter[letter]++ : (counter[letter] = 1);
  }


  for (let i = 0; i < snum2.length; ++i) {
    let letter = snum2[i];
    if (!(counter[letter])) {
      return false;
    }
  }  

  return true;

}


console.log(sameFrequency(873,837))


