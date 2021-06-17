// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

// Example 1:

// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].


var sortedSquares = function(nums) {
    var newArray = Array();
    nums.forEach(number => {
        newArray.push(number*number);
        newArray.sort((a,b) => a-b)
    });
    return newArray;
};

console.log(sortedSquares([-4,-1,0,3,10]));

//Learned to properly use forEach loop and the sort function