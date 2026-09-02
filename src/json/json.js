/** JSON conversion for storage and API payloads. */
export function runJSON() {
 console.log("\n=== JSON METHODS ==="); const order={id:1,items:["tea","milk"],placedAt:new Date("2025-01-01T00:00:00Z"),internal:"hide"};
 // stringify(value,replacer,space) returns JSON string; serialize nested object, omit private field, pretty-print.
 const json=JSON.stringify(order,["id","items","placedAt"],2); console.log("stringify",json);
 // parse(text,reviver) returns JS value; parse API JSON and restore a Date.
 const restored=JSON.parse(json,(key,value)=>key==="placedAt"?new Date(value):value); console.log("parse",restored,restored.placedAt instanceof Date);
}
