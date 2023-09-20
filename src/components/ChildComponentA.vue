<template>
    <h1>The child component called with prop value {{foo}}</h1>
    <div>
        Decrement from child component
        <button @click="decrement">Click me!</button>
    </div>
</template>
<script>
export default {
    emits: ['decrement-emit'],
    props: ['foo'],
    methods: {
        decrement() {
            this.$emit('decrement-emit');
        }
    },
  };
</script>