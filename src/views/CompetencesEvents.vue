<script setup lang="ts">
import { ref } from 'vue'
//#region GENERAL
import competences from '@/data/competences'
//#endregion

//#region FILTER
const _competences = ref(competences)
const _filteredCompetences = ref(_competences.value)
const _searchText = ref('')

function searchCompetences() {
  const searchText = _searchText.value.toLowerCase()
  _filteredCompetences.value = _competences.value.filter((competence) =>
    competence.Name.toLowerCase().includes(searchText),
  )
}
//#endregion

//#endregion DELETE
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function removeCompetence(competence: any) {
  _competences.value.splice(_competences.value.indexOf(competence), 1)
}
//#endregion

//#region styles binding
const cardStyles = ref({ Margin: '0.25rem' })
//#endregion
</script>

<template>
  <div class="join mb-2">
    <button class="btn join-item rounded-l-full pointer-events-none">
      Podaj nazwę kompetencji
    </button>
    <!-- keydown, keypress, keyup -->
    <input
      v-model="_searchText"
      @keyup.enter="searchCompetences"
      class="input join-item w-100"
      placeholder="szukaj"
    />
  </div>

  <div class="flex flex-wrap justify-center">
    <template v-for="competence in _filteredCompetences" :key="competence.Id">
      <div v-if="competence.Level" class="m-[2px] card bg-base-100 w-40 shadow-sm card-margin">
        <div class="card-body">
          <button
            @click="removeCompetence(competence)"
            class="btn btn-error btn-xs text-white font-bold w-4 h-4 absolute right-0 top-0"
          >
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
