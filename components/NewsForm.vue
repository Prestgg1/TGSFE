<template>
    <form @submit.prevent="$emit('add-news', { ...newNews, date: new Date().toLocaleDateString() })" class="space-y-4">
      <input v-model="newNews.title" type="text" class="w-full bg-gray-700 text-white rounded-md px-4 py-2" placeholder="Title" required>
      <textarea v-model="newNews.content" class="w-full bg-gray-700 text-white rounded-md px-4 py-2" placeholder="Content" required></textarea>
      <button type="submit" class="bg-red-600 text-white px-6 py-2 rounded-md">Add News</button>
    </form>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  const newNews = ref({ title: '', content: '' })
  </script>
  