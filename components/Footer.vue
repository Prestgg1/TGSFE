<template>
    <footer class="bg-black full-center flex-col w-full text-white py-10">
        <div
            class="container border-y-1 py-4 border-gray-600 flex justify-start gap-10 flex-wrap space-y-6 lg:space-y-0"
        >
            <!-- Company Info -->
            <div class="">
                <UCard
                    class="border-t-4 bg-second rounded-none w-max border-red-600"
                >
                    <template #header>
                        <h2 class="text-2xl font-bold">THE GALACTIC SOCIETY</h2>
                    </template>

                    <p class="mt-4 text-gray-400">Azerbaijan, Baku</p>
                    <p class="text-gray-400">Phone: +1 5589 55488 55</p>
                    <p class="text-gray-400">Email: info@example.com</p>

                    <template #footer>
                        <div class="flex mt-4 space-x-4">
                            <a
                                v-for="social in socials"
                                :href="social.path"
                                class="bg-gray-800 p-3 rounded-full full-center duration-200 hover:bg-qirmizi"
                            >
                                <UIcon :name="social.icon" class="w-5 h-5" />
                            </a>
                        </div>
                    </template>
                </UCard>
            </div>

            <!-- Useful Links -->
            <div class="">
                <h3 class="text-xl font-semibold mb-4">Useful Links</h3>
                <ul class="space-y-2">
                    <li v-for="link in usefulLinks" :key="link.to">
                        <NuxtLink
                            :to="link.to"
                            class="text-gray-400 hover:text-red-500"
                            >{{ link.label }}</NuxtLink
                        >
                    </li>
                </ul>
            </div>

            <!-- Our Services -->
            <div class="">
                <h3 class="text-xl font-semibold mb-4">Our Services</h3>
                <ul class="space-y-2">
                    <li v-for="service in ourServices" :key="service.to">
                        <NuxtLink
                            :to="service.to"
                            class="text-gray-400 hover:text-red-500"
                            >{{ service.label }}</NuxtLink
                        >
                    </li>
                </ul>
            </div>
        </div>
        <div
            class="border-t container border-gray-700 mt-10 pt-4 text-center text-gray-400"
        >
            &copy; 2025 The Galactic Society. All rights reserved.
        </div>
    </footer>
</template>

<script setup>
const usefulLinks = [
    { label: "Home", to: "/" },
    { label: "About", to: "/#about" },
    { label: "Services", to: "/#services" },
    { label: "Portfolio", to: "/#portfolio" },
    { label: "Contact", to: "/#contact" },
];
const ourServices = [
    { label: "Web Design", to: "/#services" },
    { label: "Web Development", to: "/#services" },
    {
        label: "Product Management",
        to: "/#services",
    },
    { label: "Marketing", to: "/#services" },
    { label: "Graphic Design", to: "/#services" },
];
const socials = [
    { icon: "icomoon-free:facebook2", to: "#" },
    { icon: "icomoon-free:twitter", to: "#" },
    { icon: "icomoon-free:instagram", to: "#" },
    { icon: "icomoon-free:facebook2", to: "#" },
];
</script>
