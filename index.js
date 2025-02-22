const crypto = require("crypto")
// const name = "day1";
// try {
//     const hash = createHmac("sha256", name).digest("hex")
//     console.log("HASH", hash)
// } catch (e) {
//     console.error(e);
// }



function findHasWhichStartWith(prefix) {
    let input = 0;
    while (true) {
        let inputStr = `gonna make you proud papa` + input.toString();
        let hash = crypto.createHash('sha256').update(inputStr).digest('hex');
        if (hash.startsWith(prefix)) {
            return { input: inputStr, hash: hash };
        }
        input++;
    }
}
console.log(findHasWhichStartWith('0000'))