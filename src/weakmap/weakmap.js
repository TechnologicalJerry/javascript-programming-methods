/** WeakMap associates metadata with object keys without keeping those keys alive; it is not iterable. */
export function runWeakMap() { console.log("\n=== WEAKMAP METHODS ==="); const user={name:"Ava"}; const metadata=new WeakMap();
 // set returns WeakMap; get returns value|undefined; has/delete return booleans; private UI metadata.
 console.log("set",metadata.set(user,{selected:true})===metadata,"get",metadata.get(user),"has",metadata.has(user),"delete",metadata.delete(user)); }
