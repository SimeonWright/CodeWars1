// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.


var searchInsert = function(nums, target) {
    for (let index = 0; index < nums.length; index++){
        if(target <= nums[index] ){
            return index;
        }
    }

    return nums.length;
};