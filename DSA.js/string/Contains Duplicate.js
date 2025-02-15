function sol (nums){
    let set = new Set(nums)
    return set.size !== nums.length
}

console.log(sol([1,2,3,1]))