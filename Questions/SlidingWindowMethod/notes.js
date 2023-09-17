// This problem involves creating a window which can either be an array or number from one position to another 

// depending  on a certain condition, the window either increases or closes ( and a new window is created)

// very useful for keeping track of a subset of data in an array/string etc.


// Q:- Hints to use sliding window pattern
// Ans:- Certainly! The sliding window pattern is a useful technique for solving many array and string manipulation problems efficiently. Here are some tips and tricks to make the most out of this pattern:

// 1. **Understand the Problem**:
//    - Before applying the sliding window pattern, thoroughly understand the problem statement, including input constraints and the desired output.

// 2. **Choose the Appropriate Window Size**:
//    - Determine the size and shape of your sliding window based on the problem requirements.
//    - Decide whether the window size is fixed or variable depending on the problem.

// 3. **Initialize the Window**:
//    - Set up your initial window based on the problem constraints.
//    - Initialize pointers or variables to define the window boundaries.

// 4. **Iterate Through the Array/String**:
//    - Use a loop (usually a `for` loop or `while` loop) to iterate through the data while adjusting the window boundaries as needed.
//    - Be cautious about infinite loops; ensure you have a condition to terminate the loop.

// 5. **Keep Track of Window State**:
//    - Maintain the state of the window and relevant variables during each iteration.
//    - Update the window by moving one or both boundaries as you process each element.

// 6. **Optimize for Efficiency**:
//    - Look for opportunities to optimize your solution, such as avoiding redundant calculations or processing.
//    - When possible, try to avoid recalculating the entire window from scratch on each iteration.

// 7. **Check for Validity and Constraints**:
//    - Ensure that your window stays within the valid range of elements or characters.
//    - Handle constraints, such as the minimum or maximum window size, as specified by the problem.

// 8. **Use Additional Data Structures**:
//    - In some cases, you may need additional data structures (e.g., hash maps or sets) to efficiently solve the problem.
//    - These data structures can help store information about the elements within the window.

// 9. **Deal with Duplicate Elements**:
//    - If the problem involves duplicate elements, consider how you'll handle them within the sliding window.
//    - Keep track of counts or indices of elements as necessary.

// 10. **Consider Edge Cases**:
//     - Be aware of edge cases, such as when the window reaches the beginning or end of the array or string.
//     - Make sure to handle these cases correctly.

// 11. **Finalize the Result**:
//     - Depending on the problem, determine when to capture or finalize the result from the window.
//     - It might be when the window reaches a certain condition, or it could involve aggregating values from within the window.

// 12. **Test Your Code**:
//     - Thoroughly test your code with different test cases, including corner cases, to ensure it handles all scenarios correctly.

// 13. **Code Readability**:
//     - Write clean and readable code with meaningful variable names and comments to explain your thought process.

// 14. **Practice**: Like any other problem-solving technique, practice is key to mastering the sliding window pattern. The more you use it, the more intuitive it becomes.

// The sliding window pattern is versatile and can be applied to a wide range of problems, such as finding subarrays with specific properties, substring problems, and more. Adapt your approach based on the problem's requirements and constraints to leverage this pattern effectively.



// Q:- Some question types in which we can use sliding window pattern
// Ans:- The sliding window pattern is a versatile technique that can be used to solve various types of problems, primarily focusing on array and string manipulation. Here are some common categories of problems that the sliding window pattern can help you solve:

// 1. **Fixed Size Subarray/Substring Problems**:
//    - Find a subarray or substring of a fixed size that satisfies certain conditions, such as maximum sum, minimum sum, or specific properties.
//    - Example: Maximum Subarray Sum of Size K, Smallest Subarray with a Sum Greater than or Equal to X.

// 2. **Variable Size Subarray/Substring Problems**:
//    - Find a subarray or substring with variable size (minimum or maximum) that satisfies certain conditions.
//    - Example: Longest Substring Without Repeating Characters, Minimum Window Substring.

// 3. **Two Pointer Problems**:
//    - Use sliding windows as two pointers to efficiently solve problems like finding pairs or sequences.
//    - Example: Find Pair with Given Sum in an Array, Three Sum.

// 4. **Frequency Counting Problems**:
//    - Keep track of the frequency of elements within a window and make decisions based on these frequencies.
//    - Example: Longest Subarray with at Most K Distinct Elements.

// 5. **Pattern Matching Problems**:
//    - Detect patterns or sequences within an array or string.
//    - Example: Find All Anagrams in a String, Permutation in String.

// 6. **Optimization Problems**:
//    - Optimize a solution by minimizing or maximizing some value within a window.
//    - Example: Maximum Average Subarray of Fixed Length, Minimum Window Subsequence.

// 7. **Sliding Window with Two Sets**:
//    - Use two sliding windows to solve problems involving two sets of elements.
//    - Example: Minimum Window Substring with Two Distinct Characters.

// 8. **Multiple Windows**:
//    - Maintain multiple windows with different properties and make decisions based on their states.
//    - Example: Minimum Size Subarray Sum.

// 9. **Cumulative Sum (Prefix Sum)**:
//    - Calculate cumulative sums to find specific subarray sums efficiently.
//    - Example: Subarray Sum Equals K.

// 10. **Time Complexity Optimization**:
//     - Optimize time complexity for problems that can be solved efficiently using the sliding window technique.
//     - Example: Maximum Points You Can Obtain from Cards.

// 11. **String Problems with Window Constraints**:
//     - Solve problems where you need to find a substring within a larger string while satisfying certain constraints.
//     - Example: Minimum Window Substring.

// These are just some examples of the types of problems you can solve using the sliding window pattern. It's a powerful technique that can be adapted to a wide range of scenarios, making it an essential tool in a programmer's problem-solving toolkit for array and string manipulation challenges.