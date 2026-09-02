/** An iterable can produce an iterator; an iterator has next() and yields {value,done}. */
export function runIterators() {
 console.log("\n=== ITERATOR HELPERS ==="); const it=[1,2,3,4].values();
 // next() returns iteration result; manually consume a stream.
 console.log("next",it.next());
 // map/filter/take/drop/flatMap lazily return helper iterators; process a data pipeline.
 const pipeline=[1,2,3,4].values().map(n=>n*2).filter(n=>n>4).take(2); console.log("helpers",pipeline.toArray(),[1,2,3].values().drop(1).flatMap(n=>[n,n]).toArray());
 // reduce/toArray/forEach/some/every/find consume iterator; return accumulator,array,undefined,boolean,boolean,value.
 console.log("consumers",[1,2,3].values().reduce((s,n)=>s+n,0),[1,2].values().toArray()); let seen=[];[1,2].values().forEach(n=>seen.push(n));console.log("forEach",seen,[1,2].values().some(n=>n===2),[1,2].values().every(n=>n>0),[1,2].values().find(n=>n>1));
}
