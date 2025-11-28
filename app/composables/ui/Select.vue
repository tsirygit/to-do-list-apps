<template>
  <div class="border border-sky-600">
    <select v-model="genres">
      <option disabled value="">choisi un genres</option>
      <option>Action</option>
      <option>Commedie</option>
      <option>Horreur</option>
      <option>Romantique</option>
    </select>
  </div>
</template>

<script setup>
import { ref } from "vue";

const genres = ref([]);

</script>
