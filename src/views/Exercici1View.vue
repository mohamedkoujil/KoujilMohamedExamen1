<script setup>
import { ref } from 'vue'
import ProductList from '../components/ProductList.vue'

const products = ref([
  { id: 1, name: 'Producte 1', description: 'Descripció producte 1' },
  { id: 2, name: 'Producte 2', description: 'Descripció producte 2' },
  { id: 3, name: 'Producte 3', description: 'Descripció producte 3' }
])
</script>

<template>
  <h2>Llistat productes</h2>
  <ProductList :products="products" />

  <RouterView :products="products" />
</template>

<style scoped></style>
