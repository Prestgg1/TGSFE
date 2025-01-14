<template>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    <section class="bg-second flex flex-col items-center text-white py-10" id="about">
        <!-- Container -->
        <div class="container mx-auto flex flex-col lg:flex-row justify-between items-center gap-10 px-6">
            <!-- Sol içerik -->
            <div class="text-content max-w-lg text-center lg:text-start">
                <h1 class="text-4xl sm:text-5xl font-extrabold mb-2 text-red-500">The Galactic Society</h1>
                <p class="text-lg italic mb-6 text-gray-300">Education Platform Created for Youngs in 2022</p>
                <ul class="space-y-4">
                    <li v-for="(feature, index) in features" :key="index" class="flex items-center justify-center lg:justify-start">
                        <span class="text-red-500 text-xl mr-3">✔</span>
                        <span class="text-lg">{{ feature }}</span>
=======
    <section class="bg-second full-center text-white py-10">
=======
    <section class="bg-second full-center flex-col text-white py-10">
>>>>>>> 69fdb7f (Services Section Added and Footer Component Upgraded)
=======
    <section class="bg-second full-center flex-col text-white py-10" id="about">
>>>>>>> 7eb107d (Teams Section and Login Page Added)
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
>>>>>>> 5121bd4 (first commit)
                    </li>
                </ul>
            </div>

            <!-- Sağdaki resim -->
<<<<<<< HEAD
            <div class="image-content w-full lg:w-1/3 flex justify-center">
                <NuxtImg
                    src="/images/about.jpg"
                    class="rounded-lg shadow-lg h-auto max-w-xs sm:max-w-md lg:max-w-full"
=======
            <div class="image-content w-full lg:w-1/3">
                <nuxt-img
                    src="/images/about.jpg"
                    class="rounded-lg shadow-lg h-auto"
>>>>>>> 5121bd4 (first commit)
                    alt="Galactic Society"
                    loading="lazy"
                />
            </div>
        </div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        
        <!-- Kartlar Bölümü -->
        <div class="container p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            <div
                v-for="kart in karts"
                :key="kart.id"
                class="p-6 shadow-md bg-gray-800 hover:bg-red-500 duration-300 group transition rounded-lg text-center"
            >
                <h2 class="text-5xl font-bold mb-2 text-red-500 group-hover:text-white">0{{ kart.id }}</h2>
                <h3 class="text-xl font-semibold mb-2">{{ kart.title }}</h3>
                <p class="text-gray-300 group-hover:text-white">{{ kart.desc }}</p>
            </div>
        </div>
=======
>>>>>>> 5121bd4 (first commit)
=======
        <div class="flex container p-6 space-x-4">
=======
        <div class="flex container p-6 space-x-4 flex-wrap">
>>>>>>> 012726b (Api Inteqrated)
            <div
                v-for="kart in karts"
                :key="kart.id"
                class="flex-1 p-6 shadow-md hover:bg-qirmizi duration-300 group transition"
            >
                <h2
                    class="text-4xl text-red-500 font-bold mb-2 duration-300 group-hover:text-white"
                >
                    0{{ kart.id }}
                </h2>
                <h3 class="text-xl font-semibold mb-2">{{ kart.title }}</h3>
                <p>
                    {{ kart.desc }}
                </p>
            </div>
        </div>
>>>>>>> 69fdb7f (Services Section Added and Footer Component Upgraded)
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 69fdb7f (Services Section Added and Footer Component Upgraded)
const karts = [
    {
        id: 1,
        title: "Free Online Courses",
        desc: "We conduct online courses in various fields for young students",
    },
    {
        id: 2,
<<<<<<< HEAD
        title: "Career Development",
        desc: "We help young professionals build their careers with expert guidance",
    },
    {
        id: 3,
        title: "Exclusive Resources",
        desc: "Members get access to premium educational materials and tools",
=======
        title: "Free Online Courses",
        desc: "We conduct online courses in various fields for young students",
    },
    {
        id: 3,
        title: "Free Online Courses",
        desc: "We conduct online courses in various fields for young students",
>>>>>>> 69fdb7f (Services Section Added and Footer Component Upgraded)
    },
];
</script>

<style>
.bg-second {
    background-color: #111;
}
</style>
=======
</script>
>>>>>>> 5121bd4 (first commit)
