const crypto = require("crypto")
// const name = "day1";
// try {
//     const hash = createHmac("sha256", name).digest("hex")
//     console.log("HASH", hash)
// } catch (e) {
//     console.error(e);
// }



function findHasWhichStartWith(input) {
    let inputStr = input.toString();
    let hash = crypto.createHash('sha256').update(inputStr).digest('hex');
    return { input: inputStr, hash: hash };
}
console.log(findHasWhichStartWith(`harkirat => Raman | Rs 100
Ram => Ankit | Rs 10`))