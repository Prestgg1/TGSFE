<script setup>
import { ref, onMounted } from 'vue';
import { NuxtLink } from '#components';
import { useCookie } from '#imports';

const token = useCookie('token');

// Kullanıcı giriş durumu
const isLogin = ref(false); // Başlangıçta giriş yapılmamış
const userName = ref('');

// Kullanıcı verisini localStorage'dan kontrol et
onMounted(() => {
    const userData = JSON.parse(localStorage.getItem('user')); // localStorage'dan kullanıcı bilgisi alınır
    if (userData) {
        isLogin.value = true;
        userName.value = userData.name; // Kullanıcı adı alınır
    }
});

const routes = [
    { name: "Home", path: "/" },
    { name: "About", path: "#about" },
    { name: "Services", path: "#services" },
    { name: "Pricing", path: "#pricing" },
    { name: "Team", path: "#team" },
    { name: "Contact", path: "#contact" },
    { name: "News", path: "/news" },
    { name: "Events", path: "#events" },
];

const handleLoginLogout = () => {
    if (isLogin.value) {
        // Çıkış yap
        localStorage.removeItem('user'); // localStorage'dan kullanıcı bilgisi silinir
        token.value = undefined;
        isLogin.value = false;
        userName.value = ''; // Kullanıcı adı sıfırlanır
    } else {
        isLogin.value = true;
    }
};
</script>

<template>
    <header class="bg-dark p-4 w-full sticky top-0 z-50">
        <div class="container mx-auto flex justify-between items-center">
            <h1 class="text-red-500 text-3xl font-bold">TGS</h1>

            <!-- Desktop Navigation -->
            <nav class="hidden md:flex gap-6 justify-center items-center">
                <template v-for="route in routes" :key="route.path">
                    <a v-if="route.path.startsWith('#')" :href="route.path" class="text-white font-bold hover:text-red-500 transition">
                        {{ route.name }}
                    </a>
                    <NuxtLink v-else :to="route.path" class="text-white font-bold hover:text-red-500 transition">
                        {{ route.name }}
                    </NuxtLink>
                </template>

                <!-- Profil veya Login/Register Linki -->
                <div class="flex items-center gap-4">
                    <button v-if="!isLogin" @click="handleLoginLogout" class="btn btn-outline btn-red-500">
                        Login
                    </button>
                    <button v-if="!isLogin" @click="handleLoginLogout" class="btn btn-outline btn-red-500">
                        Register
                    </button>
                    <div v-if="isLogin" class="dropdown dropdown-end">
                        <label tabindex="0" class="btn btn-outline btn-red-500 ">
                            {{ userName }}
                        </label>
                        <ul
                            tabindex="0"
                            class="menu dropdown-content bg-gray-800 text-white rounded-box w-52"
                        >
                            <li><NuxtLink to="/profile">Mənim Profilim</NuxtLink></li>
                            <li><button @click="handleLoginLogout">Çıxış</button></li>
                        </ul>
                    </div>
                </div>
            </nav>

            <!-- Mobile Navigation -->
            <div class="md:hidden flex justify-end">
                <div class="drawer">
                    <input id="menu-drawer" type="checkbox" class="drawer-toggle" />
                    <div class="drawer-content">
                        <label for="menu-drawer" class="btn bg-red-500 drawer-button">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </label>
                    </div>
                    <div class="drawer-side">
                        <label for="menu-drawer" class="drawer-overlay"></label>
                        <ul class="menu p-4 w-64 min-h-full bg-gray-900 text-white">
                            <template v-for="route in routes" :key="route.path">
                                <li v-if="route.path.startsWith('#')">
                                    <a :href="route.path" class="font-bold hover:text-red-500 transition">
                                        {{ route.name }}
                                    </a>
                                </li>
                                <li v-else>
                                    <NuxtLink :to="route.path" class="font-bold hover:text-red-500 transition">
                                        {{ route.name }}
                                    </NuxtLink>
                                </li>
                            </template>

                            <!-- Profil veya Login/Register Linki (Mobile) -->
                            <li v-if="!isLogin" class="space-y-2">
                                <button @click="handleLoginLogout" class="btn btn-outline btn-red-500 w-full">
                                    Login
                                </button>
                                <button @click="handleLoginLogout" class="btn btn-outline btn-red-500 w-full">
                                    Register
                                </button>
                            </li>
                            <li v-if="isLogin" class="space-y-2">
                                <button @click="handleLoginLogout" class="btn btn-outline btn-red-500 w-full">
                                    Logout
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<style scoped>
.bg-dark {
    background: #191919;
}
</style>
