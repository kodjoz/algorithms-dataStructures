// Contains duplicate

var containsDuplicate = function(nums) {

    let numCount = {};
    for (let i = 0; i < nums.length; i += 1) {
        if (!numCount[nums[i]]) {
            numCount[nums[i]] = 1;
        } else {
            return true;
        }
    }

    return false;
};