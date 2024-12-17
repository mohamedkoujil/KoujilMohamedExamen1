<script setup>
import { computed, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
const { products } = defineProps({ products: Array })

const routes = useRoute()

let productId = ref(routes.params.productId)

const producte = computed(() => products.find((p) => p.id === Number(productId.value)))

watch(
  () => routes.params.productId,
  (newVal) => {
    productId.value = newVal
    console.log(productId.value)
  }
)
</script>

<template>
  <div>
    <p>ID: {{ producte?.id }}</p>
    <p>Nom del producte: {{ producte?.name }}</p>
    <p>Descripció: {{ producte?.description }}</p>
  </div>
</template>

<style scoped></style>
