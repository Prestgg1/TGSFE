<template>
    
      <!-- Sidebar -->
  
      <!-- Main Content -->
            <h2 class="text-2xl font-bold text-white mb-6">Users</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div v-for="i in 6" :key="i" 
                   class="bg-gray-700 p-4 rounded-lg hover-scale">
                <div class="flex items-center space-x-4">
                  <div class="w-12 h-12 bg-red-500 rounded-full"></div>
                  <div>
                    <h3 class="text-white font-medium">User {{ i }}</h3>
                    <p class="text-gray-400">user{{ i }}@example.com</p>
                  </div>
                </div>
              </div>
            </div>
  
         
  
       
  </template>
  
  <script setup>
 
  import { ref } from 'vue'

  definePageMeta({
    layout: 'admin-layout',
    middleware: ['admin']
  })


  

  </script>