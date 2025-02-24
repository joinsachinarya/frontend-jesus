// to add two number without + , we have to use bitwise operator
// for that we have xor (which adds binary of nums without carry)
// and 'and' and 'left shift' (which will calculate carry )
// and then we sum both

function getSum(a, b) {
    while (b !== 0) {
        let carry = a & b;
        a = a ^ b;
        b = carry << 1;
    }
    return a;
}

console.log(getSum(5, 6))