<template>
  <div class="vue-background">
    <B>
      The component should use client-side rendering.
    </B>
    <component :is="VNode"/>
    <Zoo/>
  </div>
</template>

<script setup lang="jsx">
import Zoo from './vue_app/TestJSXInVue.jsx'
// JSX in Vue
const VNode = <div style={{color: 'green', fontWeight: 'bold'}}>This is a Vue Component!</div>
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
