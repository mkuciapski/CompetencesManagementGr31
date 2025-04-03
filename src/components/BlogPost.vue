<script setup lang="ts">
// defineProps(['text', 'author', 'type'])
// defineProps({
//   text: {
//     type: String,
//     required: true,
//     validator: (v: string) => v.length > 2,
//   },
//   author: {
//     type: String,
//     required: true,
//     default: 'unknown',
//   },
//   type: {},
// })
withDefaults(defineProps<{ text: string; author?: string; type?: string }>(), {
  author: 'unknown',
})
</script>

<template>
  <div :class="type">{{ author }}: {{ text }}</div>
</template>

<style scoped></style>
