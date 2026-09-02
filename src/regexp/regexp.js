/** RegExp methods and their String counterparts for validation and extraction. */
export function runRegExp() {
 console.log("\n=== REGEXP METHODS ==="); const email=/[\w.+-]+@[\w-]+\.[\w.-]+/g; const text="Email a@shop.test; phone 555-0123";
 // exec() advances a global regexp and returns match array|null; scan records. test() returns boolean; validate input.
 console.log("exec",email.exec(text)?.[0],"test",/\d{3}-\d{4}/.test(text));
 // String match/matchAll/search return match array, iterator, or index; extract/locate text.
 console.log("string regex",text.match(email),[..."x1 y2".matchAll(/(\w)(\d)/g)].map(m=>m[2]),text.search(/phone/));
 // replace/replaceAll/split return new strings/array; mask, normalize, and tokenize input.
 console.log("replace",text.replace(/\d/g,"*"),"replaceAll","a-a".replaceAll("-","/"),"split","red, blue;green".split(/[,;]\s*/));
}
