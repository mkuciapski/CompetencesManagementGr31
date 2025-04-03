<script setup lang="ts">
import { ref, watchEffect } from 'vue'

const _todoCode = ref(1)
const _todoData = ref()

watchEffect(async () => {
  console.log('WE')
  fetch(`https://jsonplaceholder.typicode.com/todos/${Number(_todoCode.value)}`)
    .then((response) => response.json())
    .then((json) => (_todoData.value = json))
})
</script>

<template>
  <div>
    <input v-model="_todoCode" type="number" class="input input-primary" />
    <p v-if="_todoData">{{ _todoData }}</p>
  </div>
</template>

<style scoped></style>
