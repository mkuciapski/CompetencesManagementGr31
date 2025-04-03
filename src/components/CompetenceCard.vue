<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ competence: any }>()

//#region STYLES
const cardStyles = ref({ Margin: '0.25rem' })
//#endregion
</script>

<template>
  <div v-if="competence.Level" class="m-[2px] card bg-base-100 w-40 shadow-sm card-margin">
    <div class="card-body">
      <button class="btn btn-error btn-xs text-white font-bold w-4 h-4 absolute right-0 top-0">
        X
      </button>
      <h2 class="card-title justify-center">
        {{ competence.Name.toUpperCase() }}
      </h2>
      <figure>
        <img :src="`/public/${competence.Picture}`" :alt="competence.Name" />
      </figure>
      <p
        class="font-bold"
        :class="[
          { 'text-red-700': competence.Level < 3 },
          { 'text-green-700': competence.Level > 3 },
        ]"
      >
        Poziom: {{ competence.Level }}
      </p>
      <p v-if="competence.Description">Opis: {{ competence.Description }}</p>
    </div>
  </div>
</template>

<style scoped>
.text-success {
  color: darkgreen;
}
.text-error {
  color: darkred;
}

.card-margin {
  margin: v-bind('cardStyles.Margin');
}
</style>
