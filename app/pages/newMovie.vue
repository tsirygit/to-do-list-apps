<template>
  <div class="mt-10 flex justify-center flex-col md:flex-row gap-4">
    <div>
      <Input label="Titre" v-model="title" />
    </div>

    <div>
      <Select 
        label="Genre"
        v-model="genre"
        :options="genreOptions"
      />
    </div>

    <div>
      <Button label="Ajouter" class="bg-black w-28 md:w-32 mt-0 md:mt-4" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Select from "~/composables/ui/Select.vue";
import Input from "~/composables/ui/Input.vue";
import Button from "~/composables/ui/Button.vue";

const title = ref('');
const genre = ref(null);

const genreOptions = [
  { id: 'action', name: 'Action' },
  { id: 'comedy', name: 'Comédie' },
  { id: 'horror', name: 'Horreur' },
  { id: 'romantic', name: 'Romance' }
];
</script>
