<template>
  <div class="flex">
    <nav class="w-64 h-screen bg-gray-800 text-white flex flex-col">
      <div class="p-4 text-2xl font-bold border-b border-gray-700">
        Movie List
      </div>
      <ul class="flex-1 p-4 space-y-2">
        <li>
          <NuxtLink to="homepage">homepage</NuxtLink>
        </li>
        <li>
          <NuxtLink to="newMovie">Ajouter de nouveaux film</NuxtLink>
        </li>
      </ul>
    </nav>

    <main class="flex-1 p-6">
      <slot></slot>
    </main>
  </div>
</template>

<script setup></script>
