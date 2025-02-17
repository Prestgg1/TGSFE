<template>
 <div class="fixed top-0 left-0 h-screen w-64 bg-black shadow-lg transition-all duration-300">
        <div class="flex items-center justify-center h-16 bg-red-600">
          <h1 class="text-white text-xl font-bold">Admin Panel</h1>
        </div>
        <nav class="mt-6">
          <div v-for="(item, index) in menuItems" :key="index" 
               class="hover-scale">
            <NuxtLink :to="item.to"
                    class="w-full flex items-center px-6 py-3 text-gray-300 hover:bg-red-600 hover:text-white transition-colors duration-300"
                  >
              <component :is="item.icon" class="h-5 w-5 mr-3" />
              {{ item.name }}
            </NuxtLink>
          </div>
        </nav>
      </div>
</template>

<script setup>
import { UserGroupIcon, NewspaperIcon, CalendarIcon } from '@heroicons/vue/24/outline'
const menuItems = [
  { name: 'Users', icon: UserGroupIcon, to: '/admin' },
  { name: 'News', icon: NewspaperIcon, to: '/admin/news' },
  { name: 'Events', icon: CalendarIcon, to: '/admin/events' }
]
</script>