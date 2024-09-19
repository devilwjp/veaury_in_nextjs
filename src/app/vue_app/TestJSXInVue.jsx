import { defineComponent, ref, onMounted, onBeforeUnmount } from 'vue'

export default defineComponent(function () {
  const count = ref(0)
  let timer
  onMounted(() => {
    timer = setInterval(() => count.value++, 1000)
  })
  onBeforeUnmount(() => {
    clearInterval(timer)
  })
  // JSX in Vue
  return () => <div>count: {count.value}</div>
})
