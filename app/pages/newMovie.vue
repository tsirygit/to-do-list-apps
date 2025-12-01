<template>
  <div class="flex justify-arround gap-6">
    <Input />
    <Select />
    <Button label="Ajouter" class="bg-black" />
  </div>
</template>

<script setup>
import Select from "~/composables/ui/Select.vue";
import Input from "~/composables/ui/Input.vue";
import Button from "~/composables/ui/Button.vue";
</script>
