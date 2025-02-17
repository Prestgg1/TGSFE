<script setup lang="ts">
definePageMeta({
  layout: 'admin-layout'
})
const token = useCookie('token')
const src = ref(null);

function onUploadSuccess(result: any) {
    src.value = result.info.secure_url;
}

function onUploadError(error: any) {
    console.error("Yükləmə xətası:", error);
}


import { CldUploadWidget } from '#components';
  import { ref } from 'vue'

  const newNews = ref({
    title: '',
    content: ''
  })

  const newsList = ref([
    {
      title: 'Sample News 1',
      content: 'This is a sample news content.',
      date: '2024-04-01'
    }
  ])


  async function onFormSubmit() {
    if (!src.value) {
        return;
    }

    try {
        const response = await $fetch(
            "http://127.0.0.1:8000/api/profile/image/update",
            {
                method: "PUT",
                body: {
                    imgpath: src.value,
                    name: name.value,
                    description: description.value
                },
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            },
        );

        console.log("Backend cavabı:", response);
    } catch (error) {
        console.error("Backend xətası:", error);
    }
}


  const addNews = () => {
    newsList.value.unshift({
      ...newNews.value,
      date: new Date().toLocaleDateString('en-US', { 
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    })
    newNews.value = { title: '', content: '' }
  }
</script>

<template>
  <!-- Add News Form -->
  <div class="bg-gray-800 rounded-lg p-6 shadow-xl">
    <h3 class="text-xl font-bold text-white mb-4">Add New News</h3>
    <form @submit.prevent="addNews" class="space-y-4">
      <CldUploadWidget
            v-slot="{ open, cloudinary }"
            uploadPreset="learnteach"
            @success="onUploadSuccess"
            @error="onUploadError"
        >
            <NuxtImg
                v-if="!src"
                @click="open"
                src="images/default.png"
                width="350"
                height="350"
                class="border-4 border-white rounded-[100%] cursor-pointer"
                alt=""
            />
            <NuxtImg
                v-else
                :src="src"
                @click="src = null"
                alt="Image"
                class="shadow-md w-80 h-80 rounded-[100%] border-4 border-white"
                style="filter: grayscale(100%)"
            />
        </CldUploadWidget>
      <div>
        <label class="block text-gray-300 mb-2">Title</label>
        <input v-model="newNews.title" type="text" 
               class="w-full bg-gray-700 text-white rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
               required>
      </div>
      <div>
        <label class="block text-gray-300 mb-2">Content</label>
        <textarea v-model="newNews.content" rows="4"
                  class="w-full bg-gray-700 text-white rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                  required></textarea>
      </div>
      <button type="submit" 
              class="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition-colors">
        Add News
      </button>
    </form>
  </div>

  <!-- News List -->
  <div class="bg-gray-800 rounded-lg p-6 shadow-xl">
    <h2 class="text-2xl font-bold text-white mb-6">News List</h2>
    <div class="space-y-4">
      <div v-for="(news, index) in newsList" :key="index" 
           class="bg-gray-700 p-4 rounded-lg hover-scale">
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
