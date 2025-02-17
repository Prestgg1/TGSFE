<template>
    <section class="py-16 bg-gray-900 w-screen" id="services">
      <div class="container mx-auto text-center px-6">
        <!-- Başlık -->
        <h2 class="text-4xl font-bold text-white mb-4 uppercase tracking-wide">SERVICES</h2>
        <p class="text-gray-400 text-lg mb-12">Meet Our Services</p>
  
        <!-- Hizmet Kartları -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="service in services"
            :key="service.title"
            class="bg-black text-center p-8 rounded-xl shadow-lg transition duration-300 transform group hover:-translate-y-3 hover:bg-red-500"
          >
            <!-- İkon -->
            <div
              class="bg-red-500 text-white text-4xl mb-4 p-5 rounded-full inline-flex items-center justify-center transition duration-300 group-hover:bg-white group-hover:text-red-500"
            >
              <font-awesome :icon="service.icon" />
            </div>
  
            <!-- Başlık -->
            <h3 class="text-xl font-semibold mb-2 text-white">{{ service.title }}</h3>
  
            <!-- Açıklama -->
            <p class="text-gray-400 duration-300 group-hover:text-white">
              {{ service.description }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  const services = [
    {
      title: "Online Courses",
      description: "We conduct online courses in various fields for young students.",
      icon: "book",
    },
    {
      title: "Free Tours",
      description: "We organize free domestic and foreign trips for young people.",
      icon: "users",
    },
    {
      title: "Free Certificates",
      description: "At the end of each online course, we provide a certificate to the young people.",
      icon: "certificate", // "certificate" olarak düzelttik
    },
    {
      title: "Free Online Library",
      description: "Access for more than 1000+ books.",
      icon: "book-open",
    },
    {
      title: "Career Development",
      description: "Free access to more than 100+ global competitions.",
      icon: "briefcase",
    },
    {
      title: "Movie Nights",
      description: "Every month 3 free movie nights.",
      icon: "film",
    },
  ];
  </script>
  
  <style>
  /* Kartların Yumuşak Gölgesi */
  .shadow-lg {
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.3);
  }
  </style>
  