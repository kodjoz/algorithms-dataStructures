// helper function
const merge = (left, right) => {

};

// Implement merge sort

const mergeSort = (nums) => {
  if (nums.length < 2) {
    return nums;
  }
  // Handle splitting uneven length arrays
  const mid = Math.floor(nums.length / 2);
  const left = nums.slice(0, mid);
  const right = nums.slice(mid);

  // Two recursive calls
   // merging step

  // return sorted array
  return nums;
};

const arrayOne = [5, 4, 1, 8, 7, 2, 6, 3];
const arrayTwo = [4, 1, 34, 8, 7, 2, 999, 3];