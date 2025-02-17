<script setup lang="ts">
definePageMeta({
    middleware: ['logger']
});

import { z } from "zod";
import { API_URLS } from "~/constants/api";

const schema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    surname: z.string().min(2, "Surname must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(10, "Phone number must be at least 10 characters"),
    password: z.string().min(8, "Password must be at least 8 characters"),
});

type Schema = z.infer<typeof schema>;
const state = reactive({
    name: "",
    surname: "",
    email: "",
    phone: "",
    password: "",
});

async function onSubmit(event:any) {
    try {
        const response = await $fetch(
            `${API_URLS.BASE_URL}${API_URLS.AUTH.REGISTER}`,
            {
                method: "POST",
                body: event.target as unknown as Schema,
            },
        );
        console.log("API Response:", response);
        navigateTo("/login");
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
            <h2 class="text-center text-2xl font-semibold text-red-500 mb-6">Sign Up</h2>

            <div class="mb-4">
                <label class="block text-gray-400 mb-1" for="name">Name</label>
                <input
                    id="name"
                    v-model="state.name"
                    type="text"
                    required
                    class="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:border-red-500 outline-none transition"
                />
            </div>

            <div class="mb-4">
                <label class="block text-gray-400 mb-1" for="surname">Surname</label>
                <input
                    id="surname"
                    v-model="state.surname"
                    type="text"
                    required
                    class="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:border-red-500 outline-none transition"
                />
            </div>

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

            <div class="mb-4">
                <label class="block text-gray-400 mb-1" for="phone">Phone</label>
                <input
                    id="phone"
                    v-model="state.phone"
                    type="tel"
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
                Sign Up
            </button>
        </form>
    </div>
</template>
