// maxSubArray Solution



function maxSubarraySum(arr, num) {
    if (arr.length < num) return null;
 
    let total = 0;
    for (let i=0; i<num; i++){
       total += arr[i];
    }
    let currentTotal = total;
    for (let i = num; i < arr.length; i++) {
       currentTotal = currentTotal + arr[i] - arr[i-num];
       total = Math.max(total, currentTotal);
    }
    return total;
}

// console.log(maxSubarraySum([1,2,3,4,5],3))
// minSubArrayLen Solution
function minSubArrayLen(nums, sum)  {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;
  while (start < nums.length) {
    // if current window doesn't add up to the given sum then 
    // move the window to right
    if(total < sum && end < nums.length){
      total += nums[end];
			end++;
    }
    // if current window adds up to at least the sum given then
	// we can shrink the window 
    else if(total >= sum){
      minLen = Math.min(minLen, end-start);
			total -= nums[start];
			start++;
    } 
    // current total less than required total but we reach the end, need this or else we'll be in an infinite loop 
    else {
      break;
    }
  }
  return minLen === Infinity ? 0 : minLen;
}

// Second minSubArrLen

function minSubArrayLen(nums, target) {
  let minLength = Infinity;
  let windowSum = 0;
  let windowStart = 0;

  for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
    windowSum += nums[windowEnd];
    while (windowSum >= target) {
      // Update the minimum length
      minLength = Math.min(minLength, windowEnd - windowStart + 1);
      // Shrink the window from the left
      windowSum -= nums[windowStart];
      windowStart++;
    }
  }
  return minLength === Infinity ? 0 : minLength;
}
// Example usage:
const result = minSubArrayLen([2, 3, 1, 2, 4, 3,18], 7);
// console.log(result,"result"); // Output: 2



// findLongestSubstring Solution


function findLongestSubstring(str) {
  let longest = 0;
  let seen = {};
  let start = 0;
 
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    // index - beginning of substring + 1 (to include current in count)
    longest = Math.max(longest, i - start + 1);
    // store the index of the next char so as to not double count
    seen[char] = i + 1;
  }
  return longest;
}
const  LongestSubstring = (str) => {
  let longest = 0; // Initialize the length of the longest substring
  let start = 0;   // Initialize the start index of the current substring
  const charIndexMap = {}; // Store the most recent index of each character

  for (let end = 0; end < str.length; end++) {
    const char = str[end];

    // If the character exists in the map and its index is greater than or equal to the start index,
    // update the start index to the next position after the previous occurrence.
    if (charIndexMap[char] >= start) {
      start = charIndexMap[char] + 1;
    }

    // Update the index of the current character in the map
    charIndexMap[char] = end;

    // Calculate the length of the current substring
    const currentLength = end - start + 1;

    // Update the longest length if the current substring is longer
    longest = Math.max(longest, currentLength);
  }

  return longest;
}

console.log( LongestSubstring('rithmschool')); // 7
