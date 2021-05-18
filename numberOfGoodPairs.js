/**
 * @param {number[]} nums
 * @return {number}
 */
 var numIdenticalPairs = function(nums) {
  // count number of pairs
  let count = 0;

  // create two loops
      // if a equals b, count += 1
  for (let a = 0; a < nums.length; a += 1) {
      for (let b = a + 1; b < nums.length; b += 1)
          if (nums[a] === nums[b]) {
              count += 1;
          }
  }
  // return count
  return count;
};