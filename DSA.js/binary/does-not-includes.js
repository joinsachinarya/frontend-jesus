
// var missingNumber = function (nums) {
//     for (let i = 0; i <= nums.length; i++) {
//         if (!nums.includes(i)) return i;
//     }
// };


const missingNumber = (n) => {
    let xor = 0;
    for (let i = 0; i <= n.length; i++) {
        xor = xor ^ i;
    }

    for (const num of n) {
        xor ^= num;
    }

    return xor
}

console.log(missingNumber([0, 1]))