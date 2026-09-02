# JavaScript Methods Reference

An executable, native-API learning reference for modern ECMAScript built-ins. Each category lives in its own focused ES module, uses practical data such as orders and inventory, and comments identify syntax, return values, and mutation behavior.

## Run

Requires Node.js 24 or newer, which includes the modern Set, Iterator, ArrayBuffer, and Promise APIs demonstrated here.

```bash
npm start
```

No dependencies are required. `npm run check` performs an entry-point syntax check.

## Structure and category guide

| Category | File | Purpose |
| --- | --- | --- |
| String | `src/strings/string.js` | Text search, transformation, and formatting |
| Array | `src/arrays/array.js` | Collection transformations and mutation |
| Object | `src/objects/object.js` | Properties, prototypes, and descriptors |
| Number / Math / Date | `src/numbers`, `src/math`, `src/dates` | Numeric, mathematical, and time utilities |
| RegExp / Function / JSON | `src/regexp`, `src/functions`, `src/json` | Patterns, invocation, and serialization |
| Map / Set / Weak collections | `src/maps`, `src/sets`, `src/weakmap`, `src/weakset` | Keyed and unique collections |
| Promise / Symbol / BigInt | `src/promises`, `src/symbols`, `src/bigint` | Async control, protocol hooks, large integers |
| Binary / Iterators | `src/array-buffer`, `src/typed-arrays`, `src/iterators` | Bytes and lazy pipelines |
| Errors / Intl | `src/errors`, `src/intl` | Failure handling and localized presentation |
| Reflect / Proxy / weak lifetime | `src/reflect`, `src/proxy`, `src/weak-ref`, `src/finalization-registry` | Meta-programming and memory-aware APIs |

The complete module list is: String, Array, Object, Number, Math, Date, RegExp, Function, JSON, Map, Set, WeakMap, WeakSet, Promise, Symbol, BigInt, ArrayBuffer, Typed Arrays, Iterators, Errors, Intl, Reflect, Proxy, WeakRef, and FinalizationRegistry. The runner in `index.js` executes all 25 categories in that order.

## Learning order

Start with String, Array, Object, Number, and Math. Then learn Date, RegExp, Function, JSON, Map/Set, and Promise. Leave binary data, iterator helpers, proxies, weak references, and finalization until the foundations feel comfortable.

## Mutation

Arrays prominently distinguish `sort`, `reverse`, `splice`, `fill`, and `copyWithin` (which mutate) from `toSorted`, `toReversed`, `slice`, and `with` (which return copies). Objects and typed arrays note mutation in the individual examples. Strings never mutate: transformations return a new string.

## Platform boundaries

The project demonstrates ECMAScript built-ins. DOM, Fetch, timers beyond the small Promise demonstration, and other browser APIs are not JavaScript-language methods. Node provides the runtime here; its console output and module loader are Node features, not ECMAScript methods.

## Example

```js
const prices = [12, 5, 20];
const affordable = prices.filter(price => price <= 12);
const total = affordable.reduce((sum, price) => sum + price, 0);
```

Open an individual category module to read its self-contained examples, or run the index to see every section in order.
