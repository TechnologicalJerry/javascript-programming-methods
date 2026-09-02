# Async Methods Guide

Promises represent a value that may arrive later. `then()` transforms a fulfilled value, `catch()` handles a rejection, and `finally()` performs cleanup regardless of outcome.

For several promises, use `Promise.all()` when every result is required, `Promise.allSettled()` when every outcome is useful, `Promise.any()` for the first success, and `Promise.race()` for the first settled result. The Promise module demonstrates each option with small delayed tasks.
