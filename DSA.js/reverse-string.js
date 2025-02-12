let str = '10o10baddie'


// first approach : for loop
const val = function fun() {
    let res = ''
    for (let i = str.length - 1; i > 0; i--) {
        res = res + str[i]
    }
    return res;
}
console.log(val())

// second approach : swap element
function sol(str) {
    let strval = str.split('')
    const lastInd = strval.length - 1
    let left = 0
    let right = lastInd

    while (left <= right) {
        let temp = strval[left]
        strval[left] = strval[right];
        strval[right] = temp
        left++;
        right--;
    }
    return strval.join('')
}


console.log(sol(str))