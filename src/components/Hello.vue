<script setup lang="ts">
import {
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
  onActivated,
  onDeactivated,
  onErrorCaptured,
  ref,
} from 'vue'

import StudentsSecondYear from '@/data/students'
import { lectures as _subjects } from '@/data/lectures'

const _selectedSubjects = ref(['Ang'])
const _score = ref(0)

//#region EVENTS
onBeforeMount(() => {
  console.log('Before Mount!')
})
onMounted(() => {
  console.log('Mounted!')
})
onBeforeUpdate(() => {
  console.log('Before Update!')
})
onUpdated(() => {
  console.log('Updated!')
})
onBeforeUnmount(() => {
  console.log('Before Unmount!')
})
onUnmounted(() => {
  console.log('Unmounted!')
})
onActivated(() => {
  console.log('Activated!')
})
onDeactivated(() => {
  console.log('Deactivated!')
})
onErrorCaptured(() => {
  console.log('Error Captured!')
})
//#endregion
</script>

<template>
  <pre>{{ StudentsSecondYear }}</pre>

  <div>Polska - X {{ _score }}:0</div>
  <input v-model.lazy.trim.number="_score" />

  <p v-for="subject in _subjects" :key="subject">
    <input type="checkbox" name="selectedSubjects" :value="subject" v-model="_selectedSubjects" />
    {{ subject }}
  </p>

  {{ _selectedSubjects }}
</template>

<style scoped></style>
