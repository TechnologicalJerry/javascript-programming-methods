/** Object static and inherited methods, using products and configuration objects. */
export function runObjects() {
 console.log("\n=== OBJECT METHODS ==="); const product={name:"Tea",price:4}; const id=Symbol("id"); product[id]=7;
 // keys/values/entries return arrays of own enumerable string-keyed data; render a product.
 console.log("entries",Object.keys(product),Object.values(product),Object.entries(product));
 // assign copies enumerable properties and returns target; merge defaults. fromEntries makes an object from pairs.
 console.log("assign",Object.assign({},product,{stock:5}),Object.fromEntries([["sku","T-1"],["price",4]]));
 // create(proto) makes an object with that prototype; share a product category.
 const proto={category:"grocery"}; const item=Object.create(proto); item.name="Milk"; console.log("create",item.category);
 // defineProperty/defineProperties add descriptors and return object; control read-only fields.
 Object.defineProperty(item,"sku",{value:"M-1",enumerable:true}); Object.defineProperties(item,{price:{value:3,enumerable:true},sale:{value:true,enumerable:true}}); console.log("defined",item);
 // descriptor(s), names, symbols inspect own metadata; debugging/configuration.
 console.log("descriptors",Object.getOwnPropertyDescriptor(item,"sku"),Object.getOwnPropertyDescriptors(item),Object.getOwnPropertyNames(product),Object.getOwnPropertySymbols(product));
 // get/setPrototypeOf inspect/change inheritance; returns prototype/object.
 console.log("prototype",Object.getPrototypeOf(item)===proto); Object.setPrototypeOf(item,Object.prototype);
 // hasOwn/is compare safely; return booleans; own field and exact-value checks.
 console.log("checks",Object.hasOwn(product,"name"),Object.is(NaN,NaN),Object.is(-0,0));
 // extensible/sealed/frozen checks return booleans; freeze/seal/preventExtensions return same object.
 const open={}; const sealed=Object.seal({x:1}); const frozen=Object.freeze({x:1}); Object.preventExtensions(open); console.log("state",Object.isExtensible(open),Object.isSealed(sealed),Object.isFrozen(frozen));
 // inherited methods: hasOwnProperty/isPrototypeOf/propertyIsEnumerable/toString/valueOf.
 console.log("prototype methods",product.hasOwnProperty("name"),proto.isPrototypeOf(Object.create(proto)),product.propertyIsEnumerable("name"),product.toString(),product.valueOf()===product);
 // groupBy groups iterable values; returns null-prototype object; organize orders by status.
 console.log("groupBy",Object.groupBy([{status:"paid"},{status:"new"},{status:"paid"}],o=>o.status));
}
