<template>
    
    <div class="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <h1 class="text-6xl font-bold text-red-500">{{ error.statusCode }}</h1>
      <p class="text-xl mt-4">{{ error.message || 'Oops! Something went wrong.' }}</p>
      <NuxtLink to="/" class="mt-6 px-6 py-2 bg-red-600 rounded-md hover:bg-red-700 transition">
        Go Home
      </NuxtLink>
    </div>
  </template>
  
  <script setup>
  defineProps({
    error: Object
  });
  </script>
  