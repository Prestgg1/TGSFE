<template>
<<<<<<< HEAD
<<<<<<< HEAD
    <section class="text-white w-screen flex flex-col items-center justify-center py-16 bg-gray-900" id="team">
        <div class="text-center mb-12">
            <h2 class="text-4xl font-bold uppercase tracking-wide">TEAM</h2>
            <p class="text-gray-400 mt-2">Meet Our Amazing Team</p>
        </div>

        <div class="flex flex-wrap justify-center gap-8 px-6">
            <div
                v-for="(member, index) in teamMembers"
                :key="index"
                class="w-80 bg-black text-white shadow-lg p-8 rounded-xl text-center transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
=======
    <section class="text-white py-12" id="team">
        <h2 class="text-center text-4xl font-bold mb-4">TEAM</h2>
        <p class="text-center mb-10 text-gray-400">
            Sit sint consectetur velit quisquam cupiditate impedit suscipit
            alias
        </p>
        <div class="full-center flex-wrap gap-8">
            <UCard
                v-for="(member, index) in teamMembers"
                :key="index"
                class="p-6 shadow-md duration-300 hover:shadow-xl shadow-black rounded-lg text-center"
>>>>>>> 012726b (Api Inteqrated)
            >
                <NuxtImg
                    :src="member.image"
                    :alt="member.name"
<<<<<<< HEAD
                    class="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-red-600"
                />
                <h3 class="text-xl font-semibold">{{ member.name }}</h3>
                <p class="text-sm text-gray-400 mb-2">{{ member.position }}</p>
                <p class="text-sm mb-4 max-w-sm mx-auto">{{ member.description }}</p>
                <div class="flex justify-center space-x-4 mt-4">
                    <a
                        v-for="(icon, idx) in member.socials"
                        :key="idx"
                        :href="icon.link"
                        target="_blank"
                        class="text-gray-400 hover:text-red-600 transition"
                    >
                        <svg
                            :class="`w-6 h-6 ${icon.iconClass}`"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <use :xlink:href="`#${icon.iconClass}`" />
                        </svg>
                    </a>
=======
    <section class="bg-second text-white py-12" id="team">
        <div class="container mx-auto px-4">
            <h2 class="text-center text-4xl font-bold mb-4">TEAM</h2>
            <p class="text-center mb-10 text-gray-400">
                Sit sint consectetur velit quisquam cupiditate impedit suscipit
                alias
            </p>
            <div class="full-center flex-wrap gap-8">
                <div
                    v-for="(member, index) in teamMembers"
                    :key="index"
                    class="p-6 shadow-md duration-300 hover:shadow-xl shadow-black rounded-lg text-center"
                >
                    <img
                        :src="member.image"
                        :alt="member.name"
                        class="w-24 h-24 rounded-full mx-auto mb-4"
                    />
                    <h3 class="text-xl font-semibold">{{ member.name }}</h3>
                    <p class="text-sm text-gray-400 mb-2">
                        {{ member.position }}
                    </p>
                    <p class="text-sm mb-4 max-w-sm">
                        {{ member.description }}
                    </p>
                    <div class="flex justify-center space-x-4">
                        <a
                            v-for="(icon, idx) in member.socials"
                            :key="idx"
                            :href="icon.link"
                            target="_blank"
                            class="text-gray-400 hover:text-gray-100 transition"
                        >
                            <i :class="icon.iconClass"></i>
                        </a>
                    </div>
>>>>>>> 7eb107d (Teams Section and Login Page Added)
=======
                    class="w-24 h-24 rounded-full mx-auto mb-4"
                />
                <h3 class="text-xl font-semibold">{{ member.name }}</h3>
                <p class="text-sm text-gray-400 mb-2">
                    {{ member.position }}
                </p>
                <p class="text-sm mb-4 max-w-sm">
                    {{ member.description }}
                </p>
                <div class="flex justify-center space-x-4">
                    <NuxtLink
                        v-for="(icon, idx) in member.socials"
                        :key="idx"
                        :to="icon.link"
                        target="_blank"
                        class="text-gray-400 hover:text-gray-100 transition"
                    >
                        <UIcon :name="icon.iconClass"></UIcon>
                    </NuxtLink>
>>>>>>> 012726b (Api Inteqrated)
                </div>
            </UCard>
        </div>
    </section>
</template>

<script setup>
const teamMembers = [
    {
        name: "Sarıyev Səbuhi",
        position: "Frontend Developer",
        description:
            "Magni qui quod omnis unde et eos fugo et exercitationem. Odio veritatis perspiciatis quaerat qui.",
<<<<<<< HEAD
<<<<<<< HEAD
        image: "https://i.pinimg.com/280x280_RS/77/0f/b7/770fb75f5e81e4c2dbe8934f246aeeab.jpg",
        socials: [
            { iconClass: "facebook", link: "#" },
            { iconClass: "twitter", link: "#" },
            { iconClass: "instagram", link: "#" },
            { iconClass: "linkedin", link: "#" },
        ],
    },
    {
        name: "Iltifat Ibadzade",
        position: "Backend Developer",
        description:
            "Repellat fugiat adipisci nemo illum nesciunt voluptas repellendus.",
        image: "https://i.pinimg.com/280x280_RS/77/0f/b7/770fb75f5e81e4c2dbe8934f246aeeab.jpg",
        socials: [
            { iconClass: "facebook", link: "#" },
            { iconClass: "twitter", link: "#" },
            { iconClass: "instagram", link: "#" },
            { iconClass: "linkedin", link: "#" },
=======
        image: "/images/team1.jpg", // Local veya CDN yolunu belirtin
=======
        image: "https://i.pinimg.com/280x280_RS/77/0f/b7/770fb75f5e81e4c2dbe8934f246aeeab.jpg", // Local veya CDN yolunu belirtin
>>>>>>> 012726b (Api Inteqrated)
        socials: [
            { iconClass: "icomoon-free:facebook2", link: "#" },
            { iconClass: "icomoon-free:twitter", link: "#" },
            { iconClass: "icomoon-free:instagram", link: "#" },
            { iconClass: "icomoon-free:linkedin", link: "#" },
        ],
    },
    {
        name: "Iltifat Ibadzade",
        position: "Backend Developer",
        description:
            "Repellat fugiat adipisci nemo illum nesciunt voluptas repellendus.",
        image: "https://i.pinimg.com/280x280_RS/77/0f/b7/770fb75f5e81e4c2dbe8934f246aeeab.jpg",
        socials: [
<<<<<<< HEAD
            { iconClass: "fab fa-facebook-f", link: "#" },
            { iconClass: "fab fa-twitter", link: "#" },
            { iconClass: "fab fa-instagram", link: "#" },
            { iconClass: "fab fa-linkedin-in", link: "#" },
>>>>>>> 7eb107d (Teams Section and Login Page Added)
=======
            { iconClass: "icomoon-free:facebook2", link: "#" },
            { iconClass: "icomoon-free:twitter", link: "#" },
            { iconClass: "icomoon-free:instagram", link: "#" },
            { iconClass: "icomoon-free:linkedin", link: "#" },
>>>>>>> 012726b (Api Inteqrated)
        ],
    },
];
</script>
<<<<<<< HEAD
=======

<style scoped>
/* Eğer özelleştirilmiş stil eklemek isterseniz buraya yazabilirsiniz */
</style>
>>>>>>> 7eb107d (Teams Section and Login Page Added)
