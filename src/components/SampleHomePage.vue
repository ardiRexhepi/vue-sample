<template>
    <h1>Sample Hello world with number: {{number}}</h1>
    <div>
        Increment from Root component
        <button @click="increment">Click me!</button>
    </div>
    <ChildComponentA 
        :foo="fooValue"
        @decrement-emit="decrement"
        />
</template>
<script>
import ChildComponentA from './ChildComponentA.vue';
export default {
  components: {
    ChildComponentA
  },
  data() {
    return {
      number: 0,
    };
  },
  computed: {
    fooValue() {
        return `The value comming from base component with counter: ${this.number} `
    }
  },
  methods: {
    increment() {
      this.number++;
    },
    decrement() {
      this.number--;
    }
  },
};
</script>
<style>
    button {
        width: 100px;
        height:20px;
    }
</style>