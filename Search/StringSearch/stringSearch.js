function naiveSearch(long, short) {
  var count = 0;
  for (var i = 0; i < long.length; i++) {
    for (var j = 0; j < short.length; j++) {
      if (short[j] !== long[i + j]) break;
      if (j === short.length - 1) count++;
    }
  }
  return count;
}

console.log(naiveSearch("lorie loled", "lo"))


const naiveStringSearch = (large, small) => {
  let count = 0
  for (let i = 0; i < large.length; i++){
    for (let j = 0; j < small.length; j++){
      if (small[j] !== large[i + j]) break
      if(j === small.length-1) count++
    }
  }
  return count

}
console.log(naiveStringSearch("name is aamir","am"))