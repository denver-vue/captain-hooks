**captain-hooks**

> [README](README.md) / Globals

# captain-hooks

## Index

### Functions

* [useExample](globals.md#useexample)

## Functions

### useExample

▸ `Const`**useExample**(): Ref\<string>

*Defined in useExample/index.ts:28*

Returns an example ref.

### Example
```html
<template>
 <h1>{{example}}</h1>
</template>

<script>
import { useExample } from '@denver-vue/captain-hooks'

export default {
 setup() {
   const example = useExample();
   return {
     example,
   };
 },
};
</script>
```

**Returns:** Ref\<string>

Ref<string>
