/** Typed arrays are fixed-width numeric views for binary data; common methods mirror Array. */
export function runTypedArrays() {
 console.log("\n=== TYPED ARRAY METHODS ===");
 // Constructors create different numeric-width views; BigInt views require bigint elements; Uint8Clamped clamps colors.
 console.log("constructors",new Uint8Array([256]),new Int8Array([-1]),new Uint16Array([1]),new Int16Array([-1]),new Uint32Array([1]),new Int32Array([-1]),new Float32Array([.1]),new Float64Array([.1]),new BigInt64Array([1n]),new BigUint64Array([1n]),new Uint8ClampedArray([300]));
 const a=new Uint8Array([1,2,3,4]);
 // at/copyWithin/entries/every/fill/filter/find/findIndex/findLast/findLastIndex work as Array equivalents; return element, same view, iterator, boolean, or new typed array.
 console.log("core",a.at(-1),a.copyWithin(0,2),[...a.entries()],a.every(n=>n>0),a.fill(9,2),a.filter(n=>n>2),a.find(n=>n===9),a.findIndex(n=>n===9),a.findLast(n=>n===9),a.findLastIndex(n=>n===9));
 // forEach returns undefined; includes/indexOf/join/keys/lastIndexOf inspect/render values.
 let sum=0;a.forEach(n=>sum+=n);console.log("inspect",sum,a.includes(9),a.indexOf(9),a.join("-"),[...a.keys()],a.lastIndexOf(9));
 // map/reduce/reduceRight/reverse/set/slice/some/sort/subarray transform/query; set/reverse/sort mutate, slice returns copy, subarray shares buffer.
 const b=new Uint8Array([3,1,2]); console.log("transform",b.map(n=>n*2),b.reduce((x,n)=>x+n,0),b.reduceRight((x,n)=>x-n),b.reverse(),b.set([7],1),b.slice(),b.some(n=>n===7),b.sort(),b.subarray(1));
 // toReversed/toSorted/values/with return copy/iterator/copy; immutable binary-data updates.
 console.log("copies",b.toReversed(),b.toSorted(),[...b.values()],b.with(0,99));
}
