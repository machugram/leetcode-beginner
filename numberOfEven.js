var findNumbers = function(nums) {
    let length = nums.length;
    var count = 0;
    nums.forEach(number => {
        let number_length = number.toString().length;
        if(number_length % 2 === 0){
            count++;
        }
    })
    return count;
};

console.log(findNumbers([12,345,2,6,7896]));