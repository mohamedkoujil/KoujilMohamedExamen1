<script setup>
import UserList from '../components/UserList.vue'
import InputComponent from '../components/InputComponent.vue'
import { ref } from 'vue'
const llistaUsuaris = [
  {
    id: 1,
    nom: 'Pep'
  },
  {
    id: 2,
    nom: 'Pau'
  },
  {
    id: 3,
    nom: 'Pere'
  }
]

const filter = ref()

const onFilterChange = (value) => {
  filter.value = value
}
</script>

<template>
  <div>
    <h1>Llistat d'Usuaris</h1>
    <InputComponent :onFilterChange="onFilterChange" />
    <UserList :usuaris="llistaUsuaris" :filter="filter" />
  </div>
</template>

<style scoped></style>
