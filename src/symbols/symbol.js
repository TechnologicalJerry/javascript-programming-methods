/** Symbols create collision-free property keys and customize language protocols. */
export async function runSymbols() {
 console.log("\n=== SYMBOL METHODS ===");
 // Symbol.for(key) gets global symbol; Symbol.keyFor(symbol) returns key|undefined; shared plugin identifiers.
 const shared=Symbol.for("app.user"); console.log("registry",shared===Symbol.for("app.user"),Symbol.keyFor(shared));
 // Symbol.iterator makes an object iterable; Symbol.asyncIterator provides async iteration; both return iterators.
 const iterable={[Symbol.iterator]:function*(){yield "tea";}}; const asyncIterable={[Symbol.asyncIterator]:async function*(){yield "later";}}; console.log("iterator",[...iterable]); console.log("asyncIterator",(await asyncIterable[Symbol.asyncIterator]().next()).value);
 // Symbol.toStringTag customizes Object.prototype.toString; Symbol.toPrimitive returns primitive conversion.
 const product={[Symbol.toStringTag]:"Product",[Symbol.toPrimitive](hint){return hint==="number"?4:"Tea";}}; console.log("tags",Object.prototype.toString.call(product),+product,String(product));
 // Symbol.hasInstance controls instanceof; Symbol.isConcatSpreadable controls concat flattening.
 const Brand={[Symbol.hasInstance]:value=>value?.brand==="tea"}; const boxed={[Symbol.isConcatSpreadable]:true,0:"a",1:"b",length:2}; console.log("protocols",{brand:"tea"} instanceof Brand,["x"].concat(boxed));
 // Symbol.match/matchAll/replace/search/split customize String regex-style operations; return their protocol result.
 const matcher={flags:"g",[Symbol.match]:s=>["matched",s],[Symbol.matchAll]:function*(){yield ["all"];},[Symbol.replace]:(s,r)=>`${s}:${r}`,[Symbol.search]:()=>0,[Symbol.split]:s=>[s]}; console.log("string protocols","x".match(matcher),[..."x".matchAll(matcher)],"x".replace(matcher,"y"),"x".search(matcher),"x".split(matcher));
 // Symbol.species selects constructor for derived results; Symbol.unscopables hides names in with scopes (legacy scope control).
 class Products extends Array { static get [Symbol.species](){return Array;} } console.log("species",new Products(1,2).map(n=>n) instanceof Array, new Products(1,2).map(n=>n) instanceof Products,Array.prototype[Symbol.unscopables].at);
}
