function reverseBits(n) {
    let res = 0;
    for (let i = 0; i < 32; i++) {
        let lsv = n & 1;
        reverseLsv = n << (31 - i);
        res = res | reverseLsv
        n = n >> 1;
    }
    return res >>> 0
}

console.log(reverseBits(00000010100101000001111010011100))