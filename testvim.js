const { createHmac } = require("node:crypto")
const name = "day1";
try {
	const hash = createHmac("sha256", name).digest("hex")
	console.log("HASH", hash)
} catch (e) {
	console.error(e);
}

