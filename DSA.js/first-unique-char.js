function sol(str) {

    for (let i = 0; i < str.length; i++) {
        let uniqueCharFound = true;
        for (let j = 0; j < str.length; j++) {
            if (str[i] === str[j] && i !== j) {
                uniqueCharFound = false
            }
        }
        if (uniqueCharFound) {
            return i;
        }
    }
    return -1;

}



const sol2 = (str) => {
    let map = new Map()
    for (let i = 0; i < str.length; i++) {
        if (map.get(str[i])) {
            map.set(str[i], map.get(str[i]) + 1)
        } else {
            map.set(str[i], 1)
        }
    }
    for (let i = 0; i < str.length; i++) {
        if (map.get(str[i]) === 1) return str[i]
    }
    return -1;
}
console.log(sol2('sachin'))
