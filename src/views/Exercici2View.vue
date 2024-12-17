<script setup>
import AugmentarValor from '../components/AugmentarValor.vue'
import DisminuirValor from '../components/DisminuirValor.vue'
import { ref } from 'vue'
import { provide } from 'vue'

const count = ref(0)

provide('count', count)
</script>

<template>
  <div>
    <h2>Comptador</h2>
    <p>{{ count }}</p>
    <div class="buttons">
      <AugmentarValor />
      <DisminuirValor />
    </div>
  </div>
</template>

<style scoped>
h2 {
  text-align: center;
}

p {
  text-align: center;
  font-size: 2em;
}
.buttons {
  display: flex;
  justify-content: center;
  gap: 10px;
}

.buttons button {
  padding: 10px;
  font-size: 1.5em;
  width: 50px;
}
</style>
