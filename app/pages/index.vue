<template>
  <div class="flex justify-center flex-col h-screen items-center">
    <div>
      <transition name="slide-down">
        <h1
          v-if="showTitle"
          class="font-bold text-3xl md:text-4xl text-balance"
        >
          {{ Title }}
        </h1>
      </transition>
    </div>
    <div class="mt-6">
      <NuxtLink to="homepage">
        <Button class="bg-black" label="voir maintenant" />
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Button from "~/composables/ui/Button.vue";

const Title = ref("Découvrez la liste des meilleurs films nouveautés");
const showTitle = ref(false);

onMounted(() => {
  showTitle.value = true;
});
</script>

<style scoped>
.slide-down-enter-active {
  transition: all 3s ease;
}
.slide-down-leave-active {
  transition: all 1s ease;
}
.slide-down-enter-from {
  opacity: 0;
  transform: translateY(-100px);
}
.slide-down-enter-to {
  opacity: 1;
  transform: translateY(0);
}
</style>
