<script setup>
import { ref } from 'vue';
import { CldUploadWidget } from '#components';

definePageMeta({
  layout: 'admin-layout',
  middleware: ['admin']
});

const token = useCookie('token');
const src = ref(null);
const newNews = ref({ title: '', content: '' });
const newsList = ref([
  {
    title: 'Sample News 1',
    content: 'This is a sample news content.',
    date: '2024-04-01'
  }
]);

function onUploadSuccess(result) {
  src.value = result.info.secure_url;
}

function onUploadError(error) {
  console.error('Upload Error:', error);
}

async function addNews() {
  if (!src.value || !newNews.value.title || !newNews.value.content) {
    return;
  }

  try {
    await $fetch("https://tgsapideploy-jjeo.shuttle.app/api/news/upload", {
      method: "POST",
      body: {
        file: src.value,
        name: newNews.value.title,
        description: newNews.value.content
      },
      headers: { Authorization: `Bearer ${token}` },
    });

    newsList.value.unshift({
      ...newNews.value,
      date: new Date().toLocaleDateString('en-US', {
        year: 'numeric', month: 'long', day: 'numeric'
      })
    });

    newNews.value = { title: '', content: '' };
    src.value = null;
  } catch (error) {
    console.error('Backend Error:', error);
  }
}
</script>

<template>
  <div class="bg-gray-800 rounded-lg p-6 shadow-xl">
    <h3 class="text-xl font-bold text-white mb-4">Add New News</h3>
    <form @submit.prevent="addNews" class="space-y-4">
      <CldUploadWidget
        v-slot="{ open }"
        uploadPreset="learnteach"
        @success="onUploadSuccess"
        @error="onUploadError"
      >
        <NuxtImg
          v-if="!src"
          @click="open"
          src="images/default.png"
          width="350" height="350"
          class="border-4 border-white mx-auto rounded-xl cursor-pointer"
          alt="Upload Image"
        />
        <NuxtImg
          v-else
          :src="src"
          @click="src = null"
          alt="Uploaded Image"
          class="shadow-md w-80 h-80 rounded-full border-4 border-white grayscale"
        />
      </CldUploadWidget>

      <div>
        <label class="block text-gray-300 mb-2">Title</label>
        <input v-model="newNews.title" type="text" class="w-full bg-gray-700 text-white rounded-md px-4 py-2 focus:ring-2 focus:ring-red-500" required>
      </div>

      <div>
        <label class="block text-gray-300 mb-2">Content</label>
        <textarea v-model="newNews.content" rows="4" class="w-full bg-gray-700 text-white rounded-md px-4 py-2 focus:ring-2 focus:ring-red-500" required></textarea>
      </div>

      <button type="submit" class="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition-colors">
        Add News
      </button>
    </form>
  </div>

  <div class="bg-gray-800 rounded-lg p-6 shadow-xl mt-6">
    <h2 class="text-2xl font-bold text-white mb-6">News List</h2>
    <div class="space-y-4">
      <div v-for="(news, index) in newsList" :key="index" class="bg-gray-700 p-4 rounded-lg hover:scale-105 transition-transform">
        <h3 class="text-white font-medium text-lg">{{ news.title }}</h3>
        <p class="text-gray-400 mt-2">{{ news.content }}</p>
        <div class="flex justify-between items-center mt-4">
          <span class="text-red-400">{{ news.date }}</span>
          <button class="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors">
            Read More
          </button>
        </div>
      </div>
    </div>
  </div>
</template>