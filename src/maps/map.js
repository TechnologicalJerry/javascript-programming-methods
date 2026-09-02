/** Map preserves keys of any type and iteration insertion order. */
export function runMaps() {
 console.log("\n=== MAP METHODS ==="); const stock=new Map([["tea",4],["milk",2]]);
 // set returns same Map; get returns value|undefined; has/delete return booleans; inventory CRUD.
 console.log("set",stock.set("coffee",6)===stock,"get",stock.get("tea"),"has",stock.has("milk"),"delete",stock.delete("milk"));
 // keys/values/entries return iterators; forEach returns undefined; report stock.
 console.log("iterate",[...stock.keys()],[...stock.values()],[...stock.entries()]); stock.forEach((qty,name)=>console.log("forEach",name,qty));
 // clear returns undefined and mutates; clear a session cache.
 stock.clear(); console.log("clear size",stock.size);
}
