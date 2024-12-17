<script setup>
import { inject } from 'vue'

const count = inject('count')

const disminuir = () => {
  count.value--
}
</script>

<template>
  <button @click="disminuir">-</button>
</template>

<style scoped></style>
