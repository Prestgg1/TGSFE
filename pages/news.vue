<template>
  <div class="max-w-2xl mx-auto space-y-10 my-5 p-4">
    <h1 class="text-3xl font-bold mb-4 text-center">News</h1>
    <p class="text-lg text-gray-300">You can find the latest news.</p>
  </div>

  <div class="flex flex-wrap justify-center items-center gap-5">
    <Loader v-if="isLoading" />
    <template v-else-if="data?.length">
      <New v-for="(item, index) in data" :key="index" :data="item" />
    </template>
    <p v-else class="col-span-4 text-center text-gray-500">No news available.</p>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware:['logger']
})
import { ref, onMounted } from "vue";

const data = ref<any[]>([]);
const isLoading = ref(false);

async function fetcher() {
  try {
    isLoading.value = true;
    data.value = await $fetch(
      "https://tgsapideploy-jjeo.shuttle.app/api/get/news");
      console.log(data.value)
  } catch (error) {
    console.error("Error fetching news:", error);
  } finally {
    isLoading.value = false;
  }
}

onMounted(fetcher);
</script>
