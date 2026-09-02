/** Function methods control this and argument delivery. */
export function runFunctions() {
 console.log("\n=== FUNCTION METHODS ==="); function greet(greeting,punctuation){return `${greeting}, ${this.name}${punctuation}`}; const user={name:"Ava"};
 // call(thisArg,...args) invokes now; returns function result; one known argument list.
 console.log("call",greet.call(user,"Hi","!"));
 // apply(thisArg,argsArray) invokes now; returns result; arguments already stored in an array.
 console.log("apply",greet.apply(user,["Welcome","."]));
 // bind(thisArg,...args) returns a new function; reuse a configured callback.
 const welcome=greet.bind(user,"Welcome"); console.log("bind",welcome("!"));
 // toString() returns source-like text; inspect/debug a function.
 console.log("toString",greet.toString().slice(0,35)+"...");
}
