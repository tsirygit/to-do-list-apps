<template>
  <button
    class="cursor-pointer px-4 py-2 border shadow rounded-xl text-lg text-white"
  >
    {{ label }}
  </button>
</template>

<script setup>
defineProps({
  label: String,
});
</script>
