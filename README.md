# MaterialDesign-Vue

Easy peasy MaterialDesignIcons usage in Vue components.

## Installation

### NPM

Require this package into your project:

```bash
yarn add mdi-svg --save-dev

# or, using npm
npm install mdi-svg --save-dev
```

### Other

Include the `vue-mdi.min.js` file into your project, import it and register
the Mdi component:

```html
<script src="https://github.com/chteuchteu/MaterialDesignIcons-Vue/blob/master/dist/vue-mdi.min.js"></script>
```

```js
Vue.use(Mdi);
```

## Usage

```html
<template>
    <mdi
        :mdi="mdiCheck"
        :size="16"
        class="fill-success"
    />
</template>

<script>
    export default {
        // ...
        computed: {
            mdiCheck: () => require('@mdi/svg/svg/check.svg'),
        }
    }
</script>
```
