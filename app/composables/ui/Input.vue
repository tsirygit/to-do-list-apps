<template>
  <div>
    <label
      v-if="label"
      :for="id"
      class="block text-sm font-medium text-gray-700"
      >{{ label }}</label
    >

    <input
      :id="id"
      type="text"
      class="w-72 md:w-96 border p-2 border-sky-600"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script setup>
defineProps({
  modelValue: String,
  label: {
    type: String,
    default: "",
  },
  id: {
    type: String,
  },
});

defineEmits(["update:modelValue"]);
</script>
