/** Promise combinators and chaining. All examples use native asynchronous promises. */
export async function runPromises() {
 console.log("\n=== PROMISE METHODS ==="); const delay=(value,ms=0,fail=false)=>new Promise((resolve,reject)=>setTimeout(()=>fail?reject(Error(value)):resolve(value),ms));
 // resolve/reject create settled promises; return Promise; normalize success/failure values.
 console.log("resolve",await Promise.resolve("cached")); try { await Promise.reject(Error("failed")); } catch(e) { console.log("reject",e.message); }
 // all returns values when every promise fulfills; allSettled returns outcome objects; parallel API calls.
 console.log("all",await Promise.all([delay("user"),delay("cart")])); console.log("allSettled",await Promise.allSettled([delay("ok"),delay("bad",0,true)]));
 // any fulfills on first success; race settles with first settlement; fallback and timeout patterns.
 console.log("any",await Promise.any([delay("bad",0,true),delay("backup",1)])); console.log("race",await Promise.race([delay("fast",1),delay("slow",5)]));
 // withResolvers returns {promise,resolve,reject}; bridge callback-style work.
 const deferred=Promise.withResolvers(); deferred.resolve("manual"); console.log("withResolvers",await deferred.promise);
 // then transforms fulfillment, catch handles rejection, finally runs cleanup; all return promises.
 console.log("chain",await delay(2).then(n=>n*3).catch(()=>0).finally(()=>console.log("finally cleanup")));
}
