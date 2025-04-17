<script setup lang="ts">
import { ref } from 'vue'
import type { Student } from '@/Types/Student'

import students from '@/data/students'
import ListItem from '@/components/ListItem.vue'
const _students = ref<Student[]>(students)

function deleteItem(item: Student) {
  _students.value = _students.value.filter((listItem) => listItem != item)
}

const _slotName = ref('item')
</script>

<template>
  <ListItem
    @delete="deleteItem"
    v-for="student in _students"
    :key="student.LastName"
    :item="student"
    :bold="student.Name === 'Waldemar' ? true : false"
  >
    <template #item="{ item: student, remarks }">
      <span> {{ student.Name }} {{ student.Grade }} - {{ remarks }} </span>
    </template>
    <template #info>
      <span class="text-orange-500! p-5">?</span>
    </template>
  </ListItem>

  <ol>
    <li>1. Opracować projekt</li>
  </ol>
</template>

<style scoped></style>
