<script setup>
import { inject } from 'vue'

const count = inject('count')

const augmentar = () => {
  count.value++
}
</script>

<template>
  <button @click="augmentar">+</button>
</template>

<style scoped></style>
