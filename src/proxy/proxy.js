/** Proxy intercepts fundamental operations. Trap return values must respect JavaScript invariants. */
export function runProxy() {
 console.log("\n=== PROXY METHODS ==="); const target={price:4};
 const logged=new Proxy(target,{
  // get returns property value; logging/default values.
  get(t,key,r){ console.log("get",String(key)); return Reflect.get(t,key,r)??"missing"; },
  // set returns boolean; validation before saving data.
  set(t,key,value,r){ if(key==="price"&&value<0) throw Error("price must be positive"); return Reflect.set(t,key,value,r); },
  // has/deleteProperty return booleans; hide/remove fields.
  has:(t,key)=>Reflect.has(t,key), deleteProperty:(t,key)=>Reflect.deleteProperty(t,key),
  // ownKeys/defineProperty/getOwnPropertyDescriptor list/change/describe properties; reactive inspection.
  ownKeys:t=>Reflect.ownKeys(t),defineProperty:(t,k,d)=>Reflect.defineProperty(t,k,d),getOwnPropertyDescriptor:(t,k)=>Reflect.getOwnPropertyDescriptor(t,k),
  // get/setPrototypeOf/isExtensible/preventExtensions return prototype or boolean; object meta operations.
  getPrototypeOf:t=>Reflect.getPrototypeOf(t),setPrototypeOf:(t,p)=>Reflect.setPrototypeOf(t,p),isExtensible:t=>Reflect.isExtensible(t),preventExtensions:t=>Reflect.preventExtensions(t)
 });
 console.log("object traps",logged.price,logged.missing,"price" in logged,Object.keys(logged),Reflect.defineProperty(logged,"sku",{value:"T1",enumerable:true,configurable:true}),Object.getOwnPropertyDescriptor(logged,"sku"),Reflect.getPrototypeOf(logged)===Object.prototype,Reflect.setPrototypeOf(logged,Object.prototype),Reflect.isExtensible(logged)); delete logged.sku;
 // apply trap intercepts function call; return transformed function result; analytics/logging.
 const multiply=new Proxy((a,b)=>a*b,{apply(fn,thisArg,args){console.log("apply",args);return Reflect.apply(fn,thisArg,args);}}); console.log("apply result",multiply(2,3));
 // construct trap intercepts new; returns instance; enforce construction policy.
 const User=new Proxy(class User {constructor(name){this.name=name;}},{construct(Target,args,newTarget){console.log("construct",args);return Reflect.construct(Target,args,newTarget);}}); console.log("construct result",new User("Ava"));
 // preventExtensions trap returns boolean; lock the proxy target.
 console.log("preventExtensions",Reflect.preventExtensions(logged),Reflect.isExtensible(logged));
}
