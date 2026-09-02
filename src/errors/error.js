/** Error objects carry name, message, optional cause, and implementation-provided stack. */
export function runErrors() {
 console.log("\n=== ERROR METHODS ===");
 // Error and subclasses represent failure categories; toString returns "name: message"; try/catch/finally manages recovery.
 const errors=[new Error("general",{cause:"network"}),new AggregateError([Error("a")],"many"),new EvalError("eval"),new RangeError("range"),new ReferenceError("reference"),new SyntaxError("syntax"),new TypeError("type"),new URIError("URI")];
 console.log("types",errors.map(e=>[e.name,e.message,e.cause,e.toString(),typeof e.stack]));
 try { throw new TypeError("Invalid price"); } catch(error) { console.log("caught",error.name,error.message); } finally { console.log("finally: release resources"); }
}
