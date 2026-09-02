/** Set stores unique values; modern algebra methods return new Sets/booleans. */
export function runSets() {
 console.log("\n=== SET METHODS ==="); const tags=new Set(["sale","new","sale"]);
 // add returns same set; has/delete return booleans; clear returns undefined; deduplicate tags.
 console.log("add",tags.add("popular")===tags,"has",tags.has("sale"),"delete",tags.delete("new"));
 // keys/values are equivalent iterators; entries gives [value,value]; forEach returns undefined.
 console.log("iterate",[...tags.keys()],[...tags.values()],[...tags.entries()]); tags.forEach(v=>console.log("forEach",v));
 const featured=new Set(["sale","gift"]);
 // union/intersection/difference/symmetricDifference return new Sets; combine audiences.
 console.log("algebra",[...tags.union(featured)],[...tags.intersection(featured)],[...tags.difference(featured)],[...tags.symmetricDifference(featured)]);
 // relationship tests return booleans; authorization/tag checks.
 console.log("relations",new Set(["sale"]).isSubsetOf(tags),tags.isSupersetOf(new Set(["sale"])),tags.isDisjointFrom(new Set(["clearance"])));
 tags.clear(); console.log("clear",tags.size);
}
