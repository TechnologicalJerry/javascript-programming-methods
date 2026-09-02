/** WeakRef does not keep an object alive. Garbage collection timing is intentionally never assumed. */
export function runWeakRef() { console.log("\n=== WEAKREF METHODS ==="); const cacheEntry={payload:"preview"}; const ref=new WeakRef(cacheEntry);
 // deref() returns target object|undefined; use only as an optional cache optimization.
 console.log("deref",ref.deref()?.payload ?? "collected"); console.log("GC may collect the target later; this example makes no timing claim."); }
