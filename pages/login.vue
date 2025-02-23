<script setup >
const token = useCookie('token');

definePageMeta({
    middleware: ['guest']
}); 

import { z } from "zod";

const schema = z.object({
    email: z.string().email("Invalid email"),
    password: z.string().min(8, "Must be at least 8 characters"),
});

const state = reactive({
    email: "",
    password: "",
});

async function onSubmit(event) {
    try {
        const response= await $fetch(
            `${baseURL}/user/login`,
            {
                headers:{
                    'Content-Type': 'application/json',
                },
                method: "POST",
                body: JSON.stringify(state),
            },
        );
        console.log(response)
        if(response.token){
            token.value = response.token;
            navigateTo("/");
        }
    } catch (error) {
        console.error("API Error:", error);
    }
}
</script>

<template>
    <div class="flex justify-center items-center min-h-screen bg-black">
        <form
            @submit.prevent="onSubmit"
            class="bg-gray-900 p-8 rounded-xl shadow-md w-full max-w-md border border-gray-700 hover:border-red-600 transition-all duration-300"
        >
            <h2 class="text-center text-2xl font-semibold text-red-500 mb-6">Login</h2>

            <div class="mb-4">
                <label class="block text-gray-400 mb-1" for="email">Email</label>
                <input
                    id="email"
                    v-model="state.email"
                    type="email"
                    required
                    class="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:border-red-500 outline-none transition"
                />
            </div>

            <div class="mb-6">
                <label class="block text-gray-400 mb-1" for="password">Password</label>
                <input
                    id="password"
                    v-model="state.password"
                    type="password"
                    required
                    class="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:border-red-500 outline-none transition"
                />
            </div>

            <button
                type="submit"
                class="w-full py-2 rounded-md bg-red-600 hover:bg-red-700 text-white font-semibold transition-all"
            >
                Submit
            </button>
        </form>
    </div>
</template>
