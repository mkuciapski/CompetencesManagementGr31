<script setup lang="ts">
const _routes = [
  { Path: '', Title: 'home' },
  { Path: 'lecture', Title: 'lecture' },
  { Path: 'watchEffect', Title: 'watchEffect' },
  { Path: 'computed', Title: 'computed' },
  { Path: 'CourseOpinions', Title: 'Course opinions' },
]
</script>

<template>
  <div class="border-1 m-4!">
    <RouterLink
      v-for="route in _routes"
      :to="`/${route.Path}`"
      :key="route.Path"
      class="p-1 text-blue-500 cursor-pointer hover:text-blue-200"
    >
      {{ route.Title }}
    </RouterLink>
  </div>
</template>

<style scoped></style>
