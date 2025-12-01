<template>
  <div class="border border-sky-600">
    <select v-model="genre">
      <option disabled value="">Choisi un genre</option>
      <option v-for="g in genres" :key="g" :value="g">
        {{ g }}
      </option>
    </select>
  </div>
</template>

<script setup>
import { ref } from "vue";

const genres = ref(["Action", "Commedie", "Horreur", "Romantique"]);

const genre = ref("");

</script>
