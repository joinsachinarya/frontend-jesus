/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {

  // handle case if all values are negetive , then return max of them 
  let ifAllNegetive = true;
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] >= 0) {
          ifAllNegetive = false;
      }
  }

  if (ifAllNegetive === true) {
      let max = -1000000000000;
      for (let i = 0; i < nums.length; i++) {
          if (nums[i] > max) {
              max = nums[i];
          }
      }
      return max;
  }

  // else ignore the element  till array  sums up to zero, and keep track of the prev max 
  // in case of final  sum is not the max we got  
  else {
      for (let i = 0; i < nums.length; i++) {
          if (nums[i] >= 0) {
              ifAllNegetive = false;
          }
      }

      let maxSum = 0;
      let sum = 0;
      for (let i = 0; i < nums.length; i++) {
          sum += nums[i];
          if (sum < 0) {
              sum = 0;
          }
          if (sum > maxSum) {
              maxSum = sum;
          }
      }
      return maxSum;
  }

};

console.log(maxSubArray([2, 1, 5, 1, 3, 2], 3)); // Output: 9