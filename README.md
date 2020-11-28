# React hooks as Redux state management. 

This example project shows how React Hooks can be used to create global states that can be modularized. 

- `store.js`
This file defines a function `makeStore` that returns a `context` for the `store` and for `dispatch`, and `StoreProvider` which encapsulates the two and provides `store` and `dispatch` to the children, effectively working as a modular global state.

By using `makeStore` you can create multiple store contexts with their own unique `store`, `reducer`, and `dispatch` . 

## Examples

Take a look at `exampleStoreContexts` to see how to make new `StoreContexts` using `makeStore`

Take a look at `exampleComponents` to see how to make use of `use__Store`, `use___Dispatch`, 


