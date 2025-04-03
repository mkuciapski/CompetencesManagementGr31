<script setup lang="ts">
import BlogPosts from '@/components/BlogPosts.vue'
const _opinions = [
  { Author: 'Ździsław', Text: 'Bardzo trudny' },
  { Author: 'Krzysztof', Text: 'Nudna', Type: 'text-red-700' },
  { Author: 'Weronika', Text: 'Zawiła', Type: 'text-blue-700' },
  { Author: 'Anita', Text: 'Łatwa', Type: 'text-green-700' },
]
</script>

<template>
  <BlogPosts title="Mikroekonomia" :posts="_opinions" />
</template>

<style scoped></style>
