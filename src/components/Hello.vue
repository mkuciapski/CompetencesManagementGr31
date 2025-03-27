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

const _headerStyle = ref({ Color: 'greenyellow' })
setTimeout(() => {
  _headerStyle.value.Color = 'blue'
}, 4000)

// setTimeout(() => {
//   _students.value[0].Grade = Math.floor(Math.random() * 3) + 2
//   _students.value[1].Grade = Math.floor(Math.random() * 3) + 2
// }, 3000)

const _studentsDataChanged = ref(false)

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
  <div>
    <h1 class="header">STUDENTS DATA CHANGED: {{ _studentsDataChanged }}</h1>
  </div>

  <h1>Component heading</h1>

  <button class="btn" @click.ctrl.exact="console.log('button exact')">Dont click</button>
  <input
    @keyup.ctrl.exact="console.log('exact')"
    @keyup.page-down="console.log('page-down')"
    value="test page down"
  />
  <pre>{{ StudentsSecondYear }}</pre>

  <div>Polska - X {{ _score }}:0</div>
  <input v-model.lazy.trim.number="_score" />

  <p v-for="subject in _subjects" :key="subject">
    <input type="checkbox" name="selectedSubjects" :value="subject" v-model="_selectedSubjects" />
    {{ subject }}
  </p>

  {{ _selectedSubjects }}
</template>

<style scoped>
.header {
  color: v-bind('_headerStyle.Color');
}
h1 {
  color: red;
}
</style>
