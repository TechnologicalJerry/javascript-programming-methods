/** Date methods; getters use local time unless their name begins with UTC. */
export function runDates() {
 console.log("\n=== DATE METHODS ==="); const d=new Date("2025-06-15T12:34:56.789Z");
 // now/parse/UTC return epoch milliseconds; timestamp creation and parsing.
 console.log("static",typeof Date.now(),Date.parse("2025-06-15T00:00:00Z"),Date.UTC(2025,5,15));
 // local getters return numbers; calendar display in the machine's timezone.
 console.log("local getters",d.getDate(),d.getDay(),d.getFullYear(),d.getHours(),d.getMilliseconds(),d.getMinutes(),d.getMonth(),d.getSeconds(),d.getTime(),d.getTimezoneOffset());
 // UTC getters return the same fields in UTC; API timestamps.
 console.log("UTC getters",d.getUTCDate(),d.getUTCDay(),d.getUTCFullYear(),d.getUTCHours(),d.getUTCMilliseconds(),d.getUTCMinutes(),d.getUTCMonth(),d.getUTCSeconds());
 const local=new Date(d); local.setDate(16);local.setFullYear(2026);local.setHours(9);local.setMilliseconds(0);local.setMinutes(0);local.setMonth(0);local.setSeconds(0);local.setTime(local.getTime());
 // set* mutate and return milliseconds; update local appointment fields.
 console.log("local setters",local.toISOString()); const utc=new Date(d); utc.setUTCDate(16);utc.setUTCFullYear(2026);utc.setUTCHours(9);utc.setUTCMilliseconds(0);utc.setUTCMinutes(0);utc.setUTCMonth(0);utc.setUTCSeconds(0); console.log("UTC setters",utc.toISOString());
 // conversion methods return strings (valueOf returns milliseconds); serialize/render dates.
 console.log("strings",d.toDateString(),d.toISOString(),d.toJSON(),d.toLocaleDateString("en-GB"),d.toLocaleString("en-GB",{timeZone:"UTC"}),d.toLocaleTimeString("en-GB",{timeZone:"UTC"}),d.toString(),d.toTimeString(),d.toUTCString(),d.valueOf());
}
