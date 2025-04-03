<script setup lang="ts">
import { computed, ref, watch, watchEffect } from 'vue'
//#region GENERAL
import competences from '@/data/competences'
import CompetenceCard from '@/components/CompetenceCard.vue'
import MaskEditBox from '@/components/MaskEditBox.vue'
//#endregion

//#region FILTER
const _competences = ref(competences)
const _searchText = ref('')

const _filteredCompetences = computed(() => {
  const searchText = _searchText.value.toLowerCase()
  return _competences.value.filter((competence) =>
    competence.Name.toLowerCase().includes(searchText),
  )
})
//#endregion

//#region DELETE
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function removeCompetence(competence: any) {
  _competences.value.splice(_competences.value.indexOf(competence), 1)
}

const _showAlert = ref(false)
watch(_competences.value, (newList, oldList) => {
  console.log(newList, oldList)
  _showAlert.value = true
  setTimeout(() => (_showAlert.value = false), 1500)
})

// const _firstLoad = ref(true)
// watchEffect(() => {
//   if (JSON.stringify(_competences.value) != '~!@#!#$#' && !_firstLoad.value) {
//     _showAlert.value = true
//     setTimeout(() => (_showAlert.value = false), 1500)
//   }

//   _firstLoad.value = false
// })

//#endregion
</script>

<template>
  <MaskEditBox />
  <div v-show="_showAlert" role="alert" class="alert alert-warning alert-outline relative">
    <p>Competences modified</p>
    <button @click="_showAlert = false" class="btn btn-sm absolute right-0">X</button>
  </div>
  <div class="join mb-2">
    <button class="btn join-item rounded-l-full pointer-events-none">
      Podaj nazwę kompetencji
    </button>
    <!-- keydown, keypress, keyup -->
    <input v-model="_searchText" class="input join-item w-100" placeholder="szukaj" />
  </div>

  <div class="flex flex-wrap justify-center">
    <template v-for="competence in _filteredCompetences" :key="competence.Id">
      <CompetenceCard :competence />
    </template>
  </div>
</template>

<style scoped></style>
