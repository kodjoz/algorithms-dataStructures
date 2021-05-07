// helper function
const merge = (left, right) => {
  const sorted = [];
  // tell us where to start counting our array indicies from
  let leftPointer = 0;
  let rightPointer = 0;

  // keep running a loop while the pointer is smaller than the array length
  // we don't know which input array is longer so we use an AND condition
  while (leftPointer < left.length && rightPointer < right.length) {
    const leftElement = left[leftPointer];
    const rightElement = right[rightPointer];

    if (leftElement < rightElement) {
      sorted.push(leftElement);
      leftPointer += 1;
    } else {
      sorted.push(rightElement);
      rightPointer += 1;
    }
  }
  // separate array into comma separated values to create a new array
  // merges the remaining element from the array since there will always be one element that's unused
  return [...sorted, ...left.slice(leftPointer), ...right.slice(rightPointer)];
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
  // keep splitting the array in half until we get to an array of length one or zero
  return merge(
    mergeSort(left),
    mergeSort(right)
  );
  // return sorted array
};

const arrayOne = [5, 4, 1, 8, 7, 2, 6, 3];
const arrayTwo = [4, 1, 34, 8, 7, 2, 999, 3];

console.log(mergeSort(arrayOne));