/** Number conversion, predicates, formatting, and important numeric constants. */
export function runNumbers() {
 console.log("\n=== NUMBER METHODS ===");
 // isFinite/isInteger/isNaN/isSafeInteger test without coercion; return boolean; validate input.
 console.log("tests",Number.isFinite(3),Number.isInteger(3.2),Number.isNaN(NaN),Number.isSafeInteger(9007199254740991));
 // parseFloat/parseInt parse leading numeric text; return number/NaN; read form fields.
 console.log("parse",Number.parseFloat("12.50kg"),Number.parseInt("101",2),Number("42"));
 const price=12.3456;
 // toString/toFixed/toExponential/toPrecision/toLocaleString return strings; display prices/scientific values.
 console.log("format",price.toString(16),price.toFixed(2),price.toExponential(2),price.toPrecision(4),price.toLocaleString("en-US",{style:"currency",currency:"USD"}),price.valueOf());
 // NaN is invalid number; Infinity exceeds finite range; safe bounds preserve integer precision; EPSILON is comparison tolerance.
 console.log("constants",NaN,Infinity,Number.MAX_SAFE_INTEGER,Number.MIN_SAFE_INTEGER,Number.EPSILON,Math.abs(0.1+0.2-0.3)<Number.EPSILON);
}
