// Shuffle the array
/**  Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].
* Return the array in the form [x1,y1,x2,y2,...,xn,yn].

**/

/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
 var shuffle = function(nums, n) {
  // divide and conquer
  // split array into left and right half
  const left = nums.slice(0, n);
  const right = nums.slice(n);
  let count = 0;
  let result = [];
  while (result.length < nums.length) {
      result.push(left[count], right[count]);
      count += 1;
  }
  // create a counter
  // while counter is less than nums length
  // push left[counter], right[counter]
  // counter += 1;

  return result;
};