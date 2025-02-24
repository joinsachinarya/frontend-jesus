
// brute force approach : convert into binary and then count numbers inside it


var hammingWeight = function (n) {
    let ans = 0;
    let binary = [];
    let temp = n;
    while (temp !== 0) {
        let module = temp % 2;
        binary.push(module);
        temp = Math.floor(temp / 2)
    }

    for (let i = 0; i < binary.length; i++) {
        if (binary[i] === 1) {
            ans++;
        }
    }
    return ans;
};

console.log(hammingWeight(50))


function find1Bits(n) {
    let ans = 0;
    while (n !== 0) {
        if (n & 1) ans++; // yes it will check if binary presentation of n's last bit  'and' 1  return 0 or 1
        n = n >> 1;
    }
    return ans;
}


console.log(find1Bits(4))