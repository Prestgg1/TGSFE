<template>
    <footer class="bg-black w-full text-white py-10">
        <div
            class="container mx-auto flex flex-wrap justify-between space-y-6 lg:space-y-0"
        >
            <!-- Company Info -->
            <div class="w-full lg:w-1/3">
                <div class="border-t-4 border-red-500 pb-4">
                    <h2 class="text-2xl font-bold">THE GALACTIC SOCIETY</h2>
                </div>
                <p class="mt-4 text-gray-400">Azerbaijan, Baku</p>
                <p class="text-gray-400">Phone: +1 5589 55488 55</p>
                <p class="text-gray-400">Email: info@example.com</p>
                <div class="flex mt-4 space-x-4">
                    <a
                        href="#"
                        class="bg-gray-800 p-3 rounded-full hover:bg-red-500"
                    >
                        <i class="fab fa-facebook-f"></i>
                    </a>
                    <a
                        href="#"
                        class="bg-gray-800 p-3 rounded-full hover:bg-red-500"
                    >
                        <i class="fab fa-twitter"></i>
                    </a>
                    <a
                        href="#"
                        class="bg-gray-800 p-3 rounded-full hover:bg-red-500"
                    >
                        <i class="fab fa-instagram"></i>
                    </a>
                    <a
                        href="#"
                        class="bg-gray-800 p-3 rounded-full hover:bg-red-500"
                    >
                        <i class="fab fa-linkedin-in"></i>
                    </a>
                </div>
            </div>

            <!-- Useful Links -->
            <div class="w-full lg:w-1/3">
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
            <div class="w-full lg:w-1/3">
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
            class="border-t border-gray-700 mt-10 pt-4 text-center text-gray-400"
        >
            &copy; 2025 The Galactic Society. All rights reserved.
        </div>
    </footer>
</template>

<script>
export default {
    name: "Footer",
    data() {
        return {
            usefulLinks: [
                { label: "Home", to: "/" },
                { label: "About", to: "/about" },
                { label: "Services", to: "/services" },
                { label: "Portfolio", to: "/portfolio" },
                { label: "Contact", to: "/contact" },
            ],
            ourServices: [
                { label: "Web Design", to: "/services/web-design" },
                { label: "Web Development", to: "/services/web-development" },
                {
                    label: "Product Management",
                    to: "/services/product-management",
                },
                { label: "Marketing", to: "/services/marketing" },
                { label: "Graphic Design", to: "/services/graphic-design" },
            ],
        };
    },
};
</script>

<style>
/* FontAwesome Icons için gerekli CSS */
@import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css";
</style>
