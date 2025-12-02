<template>
  <button class="cursor-pointer px-2 py-2 shadow rounded-xl text-lg text-white">
    {{ label }}
  </button>
</template>

<script setup>
defineProps({
  label: String,
});
</script>
