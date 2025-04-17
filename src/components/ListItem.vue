<script setup lang="ts" generic="T">
import { ref, useSlots } from 'vue'

const _props = withDefaults(defineProps<{ item: T; bold?: boolean }>(), { bold: false })

const _emit = defineEmits<{
  delete: [item: T]
}>()

defineSlots<{
  item({ item, remarks }: { item: T; remarks: string }): unknown
  info(): unknown
}>()

const _slots = useSlots()

function remove() {
  _emit('delete', _props.item)
}

const _secretRemarks = ref(new Date().toISOString())
</script>

<template>
  <li>
    <!-- <slot :name="Math.random() > 0.5 ? 'item' : 'bvb'"></slot> -->
    <slot name="item" :item="_props.item" :remarks="_secretRemarks"></slot>

    <!-- <slot v-if="_slots.item" name="item" :item="_props.item" :remarks="_secretRemarks"></slot>
    <span v-else :class="{ 'font-bold!': bold }">{{ item.Name }} {{ item.LastName }} </span> -->

    <button class="btn btn-error btn-xs text-white font-bold w-4 h-4" @click="remove">X</button>

    <slot v-if="_slots.info" name="info"> </slot>
    <span v-else class="text-blue-500! p-5">?</span>
  </li>
</template>

<style scoped>
li {
  @apply hover:scale-125;
}
</style>
