# Mutation Cheat Sheet

Mutation means changing an existing value rather than returning a replacement.

| Value | Mutates | Returns a copy |
| --- | --- | --- |
| Array sorting | `sort()` | `toSorted()` |
| Array reversing | `reverse()` | `toReversed()` |
| Array item replacement | `splice()` | `with()` |
| Array extraction | — | `slice()` |
| String transformation | — | All String methods return new strings |

When data is shared between parts of an application, copying methods make state updates easier to reason about.
