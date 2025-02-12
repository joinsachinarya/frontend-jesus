function twoSum(nums, target) {
    const n = nums.length;
    if (n < 2) return;
    const map = new Map()
    
    for(let i = 0; i<n; i++){
        let complement  = target - nums[i]
        if(map.has(complement)){
            return [map.get(complement), i]
        }
        map.set(nums[i], i)
    }
    return [];
}
console.log(twoSum([3, 4, 5, 6], 10))
