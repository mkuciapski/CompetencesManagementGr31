<script setup lang="ts">
import { ref } from 'vue'
import competences from '@/data/competences'

const filteredCompetences = ref(competences)

setInterval(() => {
  filteredCompetences.value.pop()

  console.log(filteredCompetences)
}, 3000)
</script>

<template>
  <div class="flex flex-wrap justify-center">
    <template v-for="competence in filteredCompetences" :key="competence.Id">
      <div v-if="competence.Level" class="m-[2px] card bg-base-100 w-40 shadow-sm">
        <div class="card-body">
          <h2 class="card-title justify-center">
            {{ competence.Name.toUpperCase() }}
          </h2>
          <figure>
            <img :src="`/public/${competence.Picture}`" :alt="competence.Name" />
          </figure>
          <p class="font-bold">Poziom: {{ competence.Level }}</p>
          <p v-if="competence.Description">Opis: {{ competence.Description }}</p>
        </div>
      </div>
    </template>
  </div>
</template>

<style scoped></style>
