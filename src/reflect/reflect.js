/** Reflect provides function-style object operations with useful boolean return values. */
export function runReflect() {
 console.log("\n=== REFLECT METHODS ==="); const target={price:4};
 // get/set/has/deleteProperty retrieve/change/test/remove; return value, boolean, boolean, boolean.
 console.log("basic",Reflect.get(target,"price"),Reflect.set(target,"stock",3),Reflect.has(target,"stock"),Reflect.deleteProperty(target,"stock"));
 // defineProperty/getOwnPropertyDescriptor return boolean/descriptor; define product fields.
 console.log("properties",Reflect.defineProperty(target,"sku",{value:"T1",enumerable:true}),Reflect.getOwnPropertyDescriptor(target,"sku"));
 // get/setPrototypeOf return prototype/boolean; isExtensible/preventExtensions return booleans; ownKeys returns keys.
 console.log("meta",Reflect.getPrototypeOf(target)===Object.prototype,Reflect.setPrototypeOf(target,null),Reflect.isExtensible(target),Reflect.ownKeys(target),Reflect.preventExtensions(target));
 // apply invokes a function; construct creates an instance; return function result/new object.
 console.log("invoke",Reflect.apply(Math.max,null,[2,9]),Reflect.construct(Date,[0]).getUTCFullYear());
}
