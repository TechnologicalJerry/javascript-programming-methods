# Collection Choice Guide

Use an `Array` for ordered values that may contain duplicates. Use an `Object` for simple named properties. Use a `Map` when keys are dynamic or are objects, and a `Set` when values must be unique.

`WeakMap` and `WeakSet` are specialised metadata collections. Their object keys or values are held weakly, so they cannot be enumerated and should not be used when the collection itself must be listed or counted.
