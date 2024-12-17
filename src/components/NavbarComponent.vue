<script setup>
import { RouterLink } from 'vue-router'
//console.log(data.destinations)
</script>

<template>
  <nav id="nav" class="navbar">
    <RouterLink class="router-link" active-class="router-link-active" :to="{ name: 'exercici1' }"
      >Exercici 1</RouterLink
    >
    <RouterLink class="router-link" active-class="router-link-active" :to="{ name: 'exercici2' }"
      >Exercici 2</RouterLink
    >
    <RouterLink class="router-link" active-class="router-link-active" :to="{ name: 'exercici3' }"
      >Exercici 3</RouterLink
    >
  </nav>
</template>

<style scoped></style>
