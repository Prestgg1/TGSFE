<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useRuntimeConfig } from '#imports';
const token = useCookie('token')

const { API_URL } = useRuntimeConfig().public;
const email = ref('');
const password = ref('');
const router = useRouter();

async function onSubmit(event) {  event.preventDefault();

  try {
    const response = await $fetch(`${API_URL}user/login`, {
      method: 'POST',
      body: {
        email: email.value,
        password: password.value
      }
    });

    token.value = response.token;
    router.push('/');
  } catch (error) {
    console.error('API Error:', error);
  } 
};

</script>

<template>
  <div class="flex items-center justify-center w-full min-h-screen bg-gray-900">
    <form
      @submit="onSubmit"
      class="space-y-4 bg-gray-800 p-6 rounded-xl w-full sm:w-96"
    >
      <!-- Email Input -->
      <div class="form-control">
        <label for="email" class="label my-2 text-white">
          <span class="label-text">Email</span>
        </label>
        <input
          class="input validator input-bordered w-full text-white bg-gray-700 border-gray-600"
          type="email"
          v-model="email"
          required
          placeholder="mail@site.com"
        />
        <div class="validator-hint">Enter valid email address</div>
      </div>

      <!-- Password Input -->
      <div class="form-control">
        <label for="password" class="label my-2 text-white">
          <span class="label-text">Password</span>
        </label>
        <input
          id="password"
          type="password"
          class="input validator input-bordered w-full text-white bg-gray-700 border-gray-600"
          v-model="password"
          required
          placeholder="Enter your password"
        />
        <div class="validator-hint">Enter valid password</div>
      </div>

      <!-- Submit Button -->
      <button
        type="submit"
        class="btn btn-red w-full text-white hover:bg-red-600 focus:outline-none"
      >
        Submit
      </button>
    </form>
  </div>
</template>

<style scoped>
/* Additional custom styling can go here */
</style>
