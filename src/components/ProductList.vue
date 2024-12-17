<script setup>
let { products } = defineProps(['products'])
</script>

<template>
  <RouterLink
    v-for="product in products"
    :key="product.id"
    :to="{ name: 'detallProducte', params: { productId: product?.id } }"
  >
    {{ product.name }}
  </RouterLink>
</template>

<style scoped></style>
