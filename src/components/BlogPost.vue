<script setup lang="ts">
defineProps(['text', 'author', 'type'])
</script>

<template>
  <div :class="type">{{ author }}: {{ text }}</div>
</template>

<style scoped></style>
