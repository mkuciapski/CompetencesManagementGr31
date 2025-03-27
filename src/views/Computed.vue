<script setup lang="ts">
import { computed, ref, watch } from 'vue'

import students from '@/data/students'
const _students = ref(students)

const _allPassed = computed((previous) => {
  // console.log('computed', previous)
  return !_students.value.some((student) => student.Grade < 3)
})

watch(
  () => _students.value,
  (newList, oldList) => {
    console.log('watch', { oldList, newList })
  },
  { deep: true, immediate: true },
)

// setTimeout(() => {
//   _students.value = []
// }, 3000)

setInterval(() => {
  for (const student of _students.value) student.Grade = Math.floor(Math.random() * 3) + 2
}, 3000)
</script>

<template>
  <div>
    <pre>
      {{ _students }}
    </pre>
    <div v-if="_allPassed">Hurra, nie mam już Waldemara</div>
  </div>
</template>

<style scoped></style>
