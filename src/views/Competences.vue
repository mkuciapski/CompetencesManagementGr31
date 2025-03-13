<script setup lang="ts">
import { onMounted, onUpdated, ref } from 'vue'

const headerTitle = ref('<i>Competences</i>')
setTimeout(() => {
  headerTitle.value = 'I love reactivity'
}, 4000)

//#region EVENTS
onUpdated(() => {
  console.log('Updated - rerendered )')
})

onMounted(() => {
  console.log('Mounted - component mounted (Jquery)')
})

console.log('Created - after created (AJAX)')
//#endregion
</script>

<template>
  <h1><span v-html="headerTitle"></span></h1>
</template>

<style scoped></style>
