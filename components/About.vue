<template>
    <section class="bg-second full-center flex-col text-white py-10" id="about">
        <!-- Container -->
        <div
            class="container mx-auto flex flex-col lg:flex-row justify-between items-center lg:items-start gap-10 px-4"
        >
            <!-- Sol içerik -->
            <div class="text-content max-w-lg">
                <h1 class="text-4xl font-bold mb-2">The Galactic Society</h1>
                <p class="text-lg italic mb-6">
                    Education Platform Created for Youngs in 2022
                </p>
                <ul class="space-y-4">
                    <li
                        v-for="(feature, index) in features"
                        :key="index"
                        class="flex items-center"
                    >
                        <span class="text-red-500 text-xl mr-3">✔</span>
                        {{ feature }}
                    </li>
                </ul>
            </div>

            <!-- Sağdaki resim -->
            <div class="image-content w-full lg:w-1/3">
                <nuxt-img
                    src="/images/about.jpg"
                    class="rounded-lg shadow-lg h-auto"
                    alt="Galactic Society"
                    loading="lazy"
                />
            </div>
        </div>
    </section>
</template>

<script setup>
const features = [
    "Professional Team",
    "Professional Teachers",
    "Membership Payment Just $3 Per/Month",
    "7/24 Online Support",
    "Free Membership Card",
];
</script>

<style>
.bg-second {
    background-color: #111;
}
</style>