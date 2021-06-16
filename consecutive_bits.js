// Given a binary array nums, return the maximum number of consecutive 1's in the array.

// Input: nums = [1,1,0,1,1,1]
// Output: 3
// Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.
// Input: nums = [1,0,1,1,0,1]
// Output: 2
 

//Solution
//Refactored Code.

var findMaxConsecutiveOnes = function(nums) {
    var count = 0;
    var max_count = 0;

    for (var i = 0; i < nums.length; i++) {
        if(nums[i] === 1){
            count++;
        }

        if (count >= max_count) {
            max_count = count
        }
        else{
            max_count = max_count
        }

        if(nums[i] === 0){
            count = 0;
       }
}
    return max_count;

};



//Brute Code
var findMaxConsecutiveOnes = function(array) {
    var length = array.length;
    var count = 0;
    var MaxTemp = 0;
    var max_count = 0;
    var zerocount= 0;


    console.log("Length : ",length);

    for (var i = 0; i < length; i++) {
        if(array[i] === 1){
            count++;
            MaxTemp = count;
            OneTemp = count;
            console.log("1 bit count : ",count);

        }

        if (count >= max_count) {
            max_count = count
        }
        else{
            max_count = max_count
        }

        if(array[i] === 0){
            OneTemp = 0;
            zerocount++;
            count =0;
       }
        
    //    
    }
    console.log("Max: ",max_count);
    return max_count;

};

findMaxConsecutiveOnes([1,1,1,1,0,1,1,0,1,1]);



//My first Leetcode assessment challenge while on the explore page. Still on Arrays.



