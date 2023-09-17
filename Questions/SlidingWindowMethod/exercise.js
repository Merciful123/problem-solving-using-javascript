// maxSubArray Solution
// Write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array.

function maxSubarraySum(arr, num) {
  if (arr.length < num) return null;

  let total = 0;
  for (let i = 0; i < num; i++) {
    total += arr[i];
  }
  let currentTotal = total;
  for (let i = num; i < arr.length; i++) {
    currentTotal = currentTotal + arr[i] - arr[i - num];
    total = Math.max(total, currentTotal);
  }
  return total;
}

// console.log(maxSubarraySum([1,2,3,4,5],3))

// Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.

// This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.

// minSubArrayLen Solution
function minSubArrayLen(nums, sum) {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;
  while (start < nums.length) {
    // if current window doesn't add up to the given sum then
    // move the window to right
    if (total < sum && end < nums.length) {
      total += nums[end];
      end++;
    }
    // if current window adds up to at least the sum given then
    // we can shrink the window
    else if (total >= sum) {
      minLen = Math.min(minLen, end - start);
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

const minSubArrayLen1 = (arr, sum) => {
  let start = 0;
  let end = 0;
  let total = 0;
  let minLen = Infinity;

  while (start < arr.length) {
    if (total < sum && end < arr.length) {
      total += arr[end];
      end++;
    } else if (total >= sum) {
      minLen = Math.min(minLen, end - start);
      total -= arr[start];
      start++;
    } else {
      break;
    }
  }
  return minLen === Infinity ? 0 : minLen;
};

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
// const result = minSubArrayLen([2, 3, 1, 2, 4, 3, 18], 7);
// console.log(result,"result"); // Output: 2

const minSubArrayLen2 = (arr, sum) => {
  let windowStart = 0;
  let total = 0;
  let minLen = Infinity;
  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    total += arr[windowEnd];
    while (total >= sum) {
      minLen = Math.min(minLen, windowEnd - windowStart + 1);
      total -= arr[windowStart];
      windowStart++;
    }
  }
  return minLen === Infinity ? 0 : minLen;
};

// findLongestSubstring Solution

// Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.

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

const findLongestSubstring1 = (str) => {
  let start = 0;
  let map = {};
  let maxLen = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (map[char]) {
      start = Math.max(start, map[char]);
    }

    map[char] = i + 1;
    maxLen = Math.max(maxLen, i - start + 1);
  }
  return maxLen;
};

console.log(findLongestSubstring("amriataspqw"));

const LongestSubstring = (str) => {
  let longest = 0; // Initialize the length of the longest substring
  let start = 0; // Initialize the start index of the current substring
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
};

// console.log(LongestSubstring("rithmschool")); // 7

const findLongestSubstring2 = (str) => {
  let longest = 0;
  let start = 0;

  let charMap = {};
  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (charMap[char] >= 0) {
      start = charMap[char] + 1;
    }
    charMap[char] = i ;

    longest = Math.max(longest, i - start + 1);
  }
  return longest;
};

console.log(findLongestSubstring2("amriataspq"));





