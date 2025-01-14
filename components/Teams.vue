<template>
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
            >
                <NuxtImg
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
                    <NuxtLink
                        v-for="(icon, idx) in member.socials"
                        :key="idx"
                        :to="icon.link"
                        target="_blank"
                        class="text-gray-400 hover:text-gray-100 transition"
                    >
                        <UIcon :name="icon.iconClass"></UIcon>
                    </NuxtLink>
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
        image: "https://i.pinimg.com/280x280_RS/77/0f/b7/770fb75f5e81e4c2dbe8934f246aeeab.jpg", // Local veya CDN yolunu belirtin
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
            { iconClass: "icomoon-free:facebook2", link: "#" },
            { iconClass: "icomoon-free:twitter", link: "#" },
            { iconClass: "icomoon-free:instagram", link: "#" },
            { iconClass: "icomoon-free:linkedin", link: "#" },
        ],
    },
];
</script>

<style scoped>
/* Eğer özelleştirilmiş stil eklemek isterseniz buraya yazabilirsiniz */
</style>
