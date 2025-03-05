/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length - 1; j++) {
            if (nums[j + 1] < nums[j]) {
                let temp = nums[j];
                nums[j] = nums[j + 1];
                nums[j + 1] = temp;
            }
        }
    }
        let ans = []

    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;// skip duplicate

        let target = - nums[i];
        let left = i + 1;
        let right = nums.length - 1;
        while (left < right) {
            let sum = nums[left] + nums[right];
            if (sum === target) {
                ans.push([nums[left], nums[right], nums[i]])
               
                while(left < right && nums[left] === nums[left +1]) left++;
                while (left < right && nums[right] === nums[right-1]) right--;
                 
                left++;
                right--;
            } else if (sum < target) {
                left++;
            } else {
                right--;
            }

        }

    }

    return ans;


};
