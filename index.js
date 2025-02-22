const { createHmac } = require("node:crypto")
const name = "day1";
try {
    const hash = createHmac("sha256", name).digest("hex")
    console.log("HASH", hash)
} catch (e) {
    console.error(e);
}



function findHasWhichStartWith() {
    let input = 0;
    while (true) {
        const hash = createHmac('sha256', "Hey").update(input.toString()).digest('hex');
        if (hash.startsWith('0000')){
            console.log(hash, input.toString())
            break;
        }
        input++;
    }
}
findHasWhichStartWith()