<template>
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
            >
                <NuxtImg
                    :src="member.image"
                    :alt="member.name"
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
                </div>
            </div>
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
        ],
    },
];
</script>
