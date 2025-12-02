<template>
  <div class="mt-10 flex justify-center flex-col md:flex-row gap-4">
  <div>
    <Input  label="recherche "/>
  </div>
  <div>
    <Button  label="recherche" class="bg-black w-28 md:w-32 mt-0 md:mt-4"/>
  </div>
  
  </div>
 
</template>

<script setup>
import Input from '~/composables/ui/Input.vue';
import Button from '~/composables/ui/Button.vue';
</script>