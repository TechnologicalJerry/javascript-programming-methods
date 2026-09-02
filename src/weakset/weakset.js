/** WeakSet records object membership weakly; unlike Set it accepts only objects and is not iterable. */
export function runWeakSet() { console.log("\n=== WEAKSET METHODS ==="); const request={}; const seen=new WeakSet();
 // add returns WeakSet; has/delete return booleans; mark processed request objects without retaining them.
 console.log("add",seen.add(request)===seen,"has",seen.has(request),"delete",seen.delete(request)); }
