/** FinalizationRegistry cleanup callbacks are not guaranteed or scheduled predictably; never use them for essential resources. */
export function runFinalizationRegistry() { console.log("\n=== FINALIZATIONREGISTRY METHODS ==="); const registry=new FinalizationRegistry(token=>console.log("eventual cleanup",token)); const target={}; const token={};
 // register(target, heldValue, unregisterToken) returns undefined; optionally associate best-effort cleanup metadata.
 console.log("register",registry.register(target,"preview-cache",token));
 // unregister(token) returns boolean; cancel a registration before target becomes unreachable.
 console.log("unregister",registry.unregister(token)); }
