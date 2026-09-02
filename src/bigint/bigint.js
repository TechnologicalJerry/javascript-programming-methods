/** BigInt represents arbitrarily large integers; do not mix it with Number in arithmetic. */
export function runBigInt() { console.log("\n=== BIGINT METHODS ==="); const n=BigInt("9007199254740993");
 // BigInt(value) converts an integer/string; asIntN/asUintN clamp to a bit width; binary protocol values.
 console.log("construct",n,BigInt.asIntN(8,255n),BigInt.asUintN(8,-1n));
 // toString/toLocaleString return strings; valueOf returns bigint; render account ids.
 console.log("format",n.toString(16),n.toLocaleString("en-US"),n.valueOf()); }
