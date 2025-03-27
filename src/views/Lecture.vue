<script setup lang="ts">
import { reactive, ref } from 'vue'
import Hello from '@/components/Hello.vue'

import logo from '@/assets/logo.svg'

// BeforeCreated

//Created
const headerTitle = ref('<i>Competences</i>')
setTimeout(() => {
  headerTitle.value = 'I love reactivity'
}, 4000)

// SCORE
const _showScore = ref(true)

// setTimeout(() => {
//   _showScore.value = false
// }, 5000)

//Reactive
const _userRef = ref({ FirtName: 'Michał', LastName: 'Kuciapski' })
const _countRef = ref(0)

const _countReactive = reactive({ count: 0 })
const _userReactive = reactive({ FirtName: 'Michał', LastName: 'Kuciapski' })

_countRef.value = 9
_userRef.value.LastName = 'KRonaldo'

_countReactive.count = 9
_userReactive.LastName = 'KRonaldo'

setTimeout(() => {
  _userRef.value = { FirtName: 'KMichał', LastName: 'K2222222' }
}, 5000)

const { LastName } = _userRef.value

const active = ref('active')
setTimeout(() => {
  active.value = 'super-active'
}, 5000)

// COUNTER
const _counter = ref(0)
</script>

<template>
  <div
    style="overflow: auto"
    @scroll.passive.prevent="
      (event) => {
        console.log(event)
        event.preventDefault()
      }
    "
  >
    <h1>Dzisiaj Rady: {{ _counter }}</h1>
    {{ _userRef.LastName.startsWith('K') ? true : false }}
    <div
      @click="
        (event) => {
          // console.log(event)
          _counter++
        }
      "
      :class="[_userRef.LastName.startsWith('K') ? active : '']"
      :style="{ display: ['webkit-box', 'ms-flexbox', 'flex'] }"
    >
      <img :src="logo" width="100" height="100" />
      <h1>
        {{ LastName }}
      </h1>

      <h1><span v-html="headerTitle"></span></h1>
      {{ _userReactive.FirtName }} {{ _userRef.FirtName }}
      <Hello v-if="_showScore" />
    </div>
  </div>
</template>

<style scoped>
.active {
  background-color: yellow;
}

.super-active {
  background-color: rgb(255, 149, 0);
}
</style>
