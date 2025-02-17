<script setup >
import { useRuntimeConfig } from '#imports';
const { API_URL } = useRuntimeConfig().public;
definePageMeta({
  middleware: ['logger']
});

import { z } from "zod";

const schema = z.object({
  name: z.string().min(2, "İsim en az 2 karakter olmalıdır"),
  surname: z.string().min(2, "Soyisim en az 2 karakter olmalıdır"),
  email: z.string().email("Geçerli bir email adresi giriniz"),
  phone: z.number().int("Telefon numarası sadece rakam içermelidir"),
  password: z.string().min(8, "Şifre en az 8 karakter olmalıdır"),
});

const state = reactive({
  name: undefined,
  surname: undefined,
  email: undefined,
  phone: undefined,
  password: undefined,
});

async function onSubmit(event) {
  try {
    const response = await $fetch(
      `${API_URL}user/create`,
      {
        method: "POST",
        body: event,
      },
    );
    console.log("API Response:", response);
  } catch (error) {
    console.error("API Error:", error);
  };
};
</script>

<template>
  <div class="flex items-center justify-center w-full min-h-screen bg-gray-900">
    <form
      @submit="onSubmit"
      class="space-y-6 bg-gray-800 p-6 rounded-xl w-full sm:w-96"
    >
      <!-- Name Input -->
      <div class="form-control">
        <label for="name" class="label text-white">
          <span class="label-text">İsim</span>
        </label>
        <input
          id="name"
          type="text"
          v-model="state.name"
          class="input input-bordered w-full text-white bg-gray-700 border-gray-600"
          placeholder="İsminizi girin"
        />
      </div>

      <!-- Surname Input -->
      <div class="form-control">
        <label for="surname" class="label text-white">
          <span class="label-text">Soyisim</span>
        </label>
        <input
          id="surname"
          type="text"
          v-model="state.surname"
          class="input input-bordered w-full text-white bg-gray-700 border-gray-600"
          placeholder="Soyadınızı girin"
        />
      </div>

      <!-- Email Input -->
      <div class="form-control">
        <label for="email" class="label text-white">
          <span class="label-text">Email</span>
        </label>
        <input
          id="email"
          type="email"
          v-model="state.email"
          class="input input-bordered w-full text-white bg-gray-700 border-gray-600"
          placeholder="Email adresinizi girin"
        />
      </div>

      <!-- Phone Input -->
      <div class="form-control">
        <label for="phone" class="label text-white">
          <span class="label-text">Telefon</span>
        </label>
        <input
          id="phone"
          type="number"
          v-model="state.phone"
          class="input input-bordered w-full text-white bg-gray-700 border-gray-600"
          placeholder="Telefon numaranızı girin"
        />
      </div>

      <!-- Password Input -->
      <div class="form-control">
        <label for="password" class="label text-white">
          <span class="label-text">Şifre</span>
        </label>
        <input
          id="password"
          type="password"
          v-model="state.password"
          class="input input-bordered w-full text-white bg-gray-700 border-gray-600"
          placeholder="Şifrenizi girin"
        />
      </div>

      <!-- Submit Button -->
      <button
        type="submit"
        class="btn btn-red w-full text-white hover:bg-red-600 focus:outline-none"
      >
        Kayıt Ol
      </button>
    </form>
  </div>
</template>

<style scoped>
/* Additional custom styling can go here */
</style>
