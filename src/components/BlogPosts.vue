<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script setup lang="ts">
import BlogPost from '@/components/BlogPost.vue'

const _props = defineProps(['title', 'posts'])
_props.posts.forEach((posts: any) => {
  posts.Author = posts.Author.toUpperCase()
})
</script>

<template>
  <h2 class="mb-5! font-bold!">{{ title }}</h2>
  <div>
    <BlogPost
      v-for="post in posts"
      :key="post.Author + post.Text"
      :author="post.Author"
      :text="post.Text"
      :type="post.Type ?? 'text-black-800'"
    />
  </div>
</template>

<style scoped></style>
