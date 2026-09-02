# Runtime Notes

This project targets Node.js 24 or newer. That runtime includes modern features used by the examples, such as Set algebra, iterator helpers, `Promise.withResolvers()`, and resizable `ArrayBuffer` methods.

Weak references and finalization are intentionally demonstrated without assuming when garbage collection occurs. Their examples explain the APIs but never rely on cleanup callbacks for required application behavior.
