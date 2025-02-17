<script setup lang="ts">
definePageMeta({
  layout: 'admin-layout'
})
  // Events Management
  const newEvent = ref({
    title: '',
    description: '',
    date: ''
  })

  const eventsList = ref([
    {
      title: 'Sample Event 1',
      description: 'This is a sample event description.',
      date: '2024-04-01'
    }
  ])

  const addEvent = () => {
    eventsList.value.unshift({
      ...newEvent.value,
      date: new Date(newEvent.value.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    })
    newEvent.value = { title: '', description: '', date: '' }
  }

</script>

<template>
  <div class="bg-gray-800 rounded-lg p-6 shadow-xl">
    <h3 class="text-xl font-bold text-white mb-4">Add New Event</h3>
    <form @submit.prevent="addEvent" class="space-y-4">
      <div>
        <label class="block text-gray-300 mb-2">Event Title</label>
        <input v-model="newEvent.title" type="text"
               class="w-full bg-gray-700 text-white rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
               required>
      </div>
      <div>
        <label class="block text-gray-300 mb-2">Description</label>
        <textarea v-model="newEvent.description" rows="4"
                  class="w-full bg-gray-700 text-white rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                  required></textarea>
      </div>
      <div>
        <label class="block text-gray-300 mb-2">Date</label>
        <input v-model="newEvent.date" type="date"
               class="w-full bg-gray-700 text-white rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
               required>
      </div>
      <button type="submit"
              class="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition-colors">
        Add Event
      </button>
    </form>
  </div>

  <!-- Events List -->
  <div class="bg-gray-800 rounded-lg p-6 shadow-xl">
    <h2 class="text-2xl font-bold text-white mb-6">Events List</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div v-for="(event, index) in eventsList" :key="index"
           class="bg-gray-700 p-4 rounded-lg hover-scale">
        <div class="flex justify-between items-start">
          <div>
            <h3 class="text-white font-medium text-lg">{{ event.title }}</h3>
            <p class="text-gray-400 mt-2">{{ event.description }}</p>
            <p class="text-red-400 mt-2">{{ event.date }}</p>
          </div>
          <span class="bg-red-600 text-white px-3 py-1 rounded-full text-sm">
            Active
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
