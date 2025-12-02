<template>
  <div>
    <label v-if="label" class="block text-sm font-medium text-gray-700">{{
      label
    }}</label>
    <select
      class="border p-2 border-sky-600"
      :value="modelValue"
      @change="$emit('update:modelValue', $event.target.value)"
    >
      <option disabled value="">Choisir un genre</option>
      <option v-for="option in options" :key="option.id" :value="option.id">
        {{ option.name }}
      </option>
    </select>
  </div>
</template>

<script setup>
defineProps({
  modelValue: {
    type: [String, Number, Array, Object],
    default: null,
  },
  options: {
    type: Array,
    required: true,
  },
  label: {
    type: String,
    default: "Sélection",
  },
});

defineEmits(["update:modelValue"]);
</script>
