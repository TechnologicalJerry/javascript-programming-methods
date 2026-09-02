/** Array methods. Methods marked MUTATES change the original array; copying methods do not. */
export function runArrays() {
 console.log("\n=== ARRAY METHODS ===");
 const log=(name,value)=>console.log(name, value); let cart=["milk","bread","eggs"];
 // push/pop/shift/unshift — add/remove ends; return length or removed item; queue management. MUTATES.
 log("push",cart.push("tea")); log("pop",cart.pop()); log("shift",cart.shift()); log("unshift",cart.unshift("fruit"));
 // splice(start, deleteCount, ...items) edits and returns removed items; inventory edit. MUTATES. slice returns a non-mutating copy.
 log("splice",cart.splice(1,1,"coffee")); log("slice",cart.slice(0,2)); log("concat",cart.concat("tea"));
 // flat(depth)/flatMap(callback) flatten results; return new arrays; API tags.
 log("flat",["fruit",["apple","pear"]].flat()); log("flatMap",[1,2].flatMap(n=>[n,n*10]));
 const sales=[3,7,2,7];
 // find/findIndex/findLast/findLastIndex locate records; return value/index (or undefined/-1).
 log("find",sales.find(n=>n>5)); log("findIndex",sales.findIndex(n=>n>5)); log("findLast",sales.findLast(n=>n>5)); log("findLastIndex",sales.findLastIndex(n=>n>5));
 // includes/indexOf/lastIndexOf search values; return boolean or index; contains is clearest as a boolean.
 log("search",sales.includes(7),sales.indexOf(7),sales.lastIndexOf(7));
 // forEach returns undefined; map/filter return arrays; perform side effects, transform prices, select stock.
 let total=0; sales.forEach(n=>{total+=n}); log("forEach total",total); log("map",sales.map(n=>n*2)); log("filter",sales.filter(n=>n>=5));
 // reduce/reduceRight combine items; return accumulator; calculate totals.
 log("reduce",sales.reduce((sum,n)=>sum+n,0)); log("reduceRight",["a","b","c"].reduceRight((s,x)=>s+x,""));
 // some/every test conditions; return boolean; business rules.
 log("some/every",sales.some(n=>n<3),sales.every(n=>n>0));
 const sortable=[10,2,30];
 // sort/reverse MUTATE and return same array; toSorted/toReversed return copies; immutable UI state.
 log("sort",sortable.sort((a,b)=>a-b)); log("toSorted",sales.toSorted((a,b)=>a-b)); log("reverse",sortable.reverse()); log("toReversed",sales.toReversed());
 // join converts values to string; returns string; CSV.
 log("join",cart.join(", "));
 // fill/copyWithin mutate and return same array; prepare a fixed buffer.
 log("fill",[0,0,0].fill(9,1)); log("copyWithin",[1,2,3,4].copyWithin(0,2));
 // entries/keys/values return iterators; at supports negative indexes; indexed rendering.
 log("iterators",[...cart.entries()],[...cart.keys()],[...cart.values()],cart.at(-1));
 // with(index,value) returns a copy; safely update one item.
 log("with",cart.with(0,"apples"));
 // toString/toLocaleString return strings; display a list according to locale.
 log("strings",sales.toString(),[1234.5].toLocaleString("de-DE"));
}
