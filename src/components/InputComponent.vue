<script setup>
import { ref } from 'vue'

//get function from parent using emits
const { onFilterChange } = defineProps(['onFilterChange'])

let filterValue = ref('')

const onChange = () => {
  onFilterChange(filterValue.value)
}
</script>

<template>
  <input type="text" v-model="filterValue" @input="onChange" />
</template>

<style scoped></style>
