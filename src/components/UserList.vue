<script setup>
import { computed, watch } from 'vue'

const { usuaris, filter } = defineProps({
  usuaris: Array,
  filter: String
})

const filteredUsers = computed(() => {
  if (!filter) return usuaris
  return usuaris.filter((usuari) => usuari.nom.toLowerCase().includes(filter.toLowerCase()))
})

watch(
  () => filter,
  (newVal, oldVal) => {
    console.log('Filtre canviat:', oldVal, '=>', newVal)
  }
)
</script>

<template>
  <div>Llista usuaris</div>
  <ul>
    <li v-for="usuari in filteredUsers" :key="usuari.id">
      <span>{{ usuari.nom }}</span>
    </li>
  </ul>
</template>

<style scoped></style>
