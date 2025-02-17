<template>
  <div class="flex">
    <div class="flex-1 min-h-screen bg-gray-900">
    <AdminSidebar />
    <div class="ml-64 p-8">
      <NuxtPage />
    </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  ssr: false
})
</script>