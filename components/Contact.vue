<template>
    <section class="bg-gray-900 text-white py-16 w-screen" id="contact">
      <!-- Başlık -->
      <div class="text-center mb-12">
        <h2 class="text-4xl font-extrabold text-red-500">Contact Us</h2>
        <p class="text-lg mt-2">We're here to assist you!</p>
      </div>
  
      <!-- Üst Bilgi -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center mb-12 px-4">
        <div>
          <i class="i-heroicons-map-pin w-10 h-10 text-red-500 mb-4" />
          <h3 class="text-xl font-semibold">Our Address</h3>
          <p class="mt-2">Azerbaijan, Baku</p>
        </div>
  
        <div>
          <i class="i-heroicons-envelope w-10 h-10 text-red-500 mb-4" />
          <h3 class="text-xl font-semibold">Email Us</h3>
          <p class="mt-2">thegalacticsociety1@gmail.com</p>
        </div>
  
        <div>
          <i class="i-heroicons-phone w-10 h-10 text-red-500 mb-4" />
          <h3 class="text-xl font-semibold">Call Us</h3>
          <p class="mt-2">+1 5589 55488 55</p>
        </div>
      </div>
  
      <!-- Harita ve Form -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-8 px-4">
        <!-- Harita -->
        <div class="w-full h-full">
          <iframe
            class="w-full h-80"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3031.5690037514267!2d49.86709261572619!3d40.40926106515225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x403063abed8fae99%3A0x8b7c2c2a67b3b2e0!2sBaku%2C%20Azerbaijan!5e0!3m2!1sen!2s!4v1679418412312!5m2!1sen!2s"
            loading="lazy"
          ></iframe>
        </div>
  
        <!-- Form -->
        <div>
          <form class="space-y-4">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                class="w-full bg-gray-800 border border-gray-600 rounded-lg p-4"
              />
              <input
                type="email"
                placeholder="Your Email"
                class="w-full bg-gray-800 border border-gray-600 rounded-lg p-4"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              class="w-full bg-gray-800 border border-gray-600 rounded-lg p-4"
            />
            <textarea
              placeholder="Message"
              class="w-full bg-gray-800 border border-gray-600 rounded-lg p-4"
            ></textarea>
            <button
              type="submit"
              class="bg-red-500 hover:bg-red-600 text-white py-3 px-6 rounded-lg w-full sm:w-auto"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  </template>