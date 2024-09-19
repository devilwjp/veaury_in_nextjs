<template>
  <div class="vue-background">
    <div>This is a Vue Component!</div>
    <div>I am {{foo}}!</div>
  </div>
</template>

<script setup>
// import './test.css'
import { ref } from 'vue'
const foo = ref('Foo')
</script>

<style scoped>
@keyframes glow {
  0% {
    box-shadow: 0 0 10px #fff;
  }
  50% {
    box-shadow: 0 0 40px #fff, 0 0 40px rgb(0, 255, 108);
  }
  100% {
    box-shadow: 0 0 10px #fff;
  }
}

.vue-background {
  padding: 20px;
  border-radius: 10px;
  background: #b0f1cb;
  animation: glow 1.5s infinite alternate;
}
</style>
