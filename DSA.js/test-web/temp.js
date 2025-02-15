var sortArray = function (nums) {
    debugger
    for (let j = 0; j < nums.length; j++) {
        let min = nums[j];
        let minIndex = j;
        
        for (let i = j+1; i < nums.length; i++) {
            if (nums[i] < min) {
                min = nums[i];
                minIndex = i;
            }
        }
        if(minIndex === j){
            nums[j] = min;
        }else{
            let temp  = nums[j];
            nums[j] = min;
            nums[minIndex] = temp;
        }
    }
    return nums;
};

console.log(sortArray([5,1,1,2,0,0]))