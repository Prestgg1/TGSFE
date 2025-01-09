<template>
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
        image: "/images/team1.jpg", // Local veya CDN yolunu belirtin
        socials: [
            { iconClass: "fab fa-facebook-f", link: "#" },
            { iconClass: "fab fa-twitter", link: "#" },
            { iconClass: "fab fa-instagram", link: "#" },
            { iconClass: "fab fa-linkedin-in", link: "#" },
        ],
    },
    {
        name: "",
        position: "Product Manager",
        description:
            "Repellat fugiat adipisci nemo illum nesciunt voluptas repellendus.",
        image: "/images/team2.jpg",
        socials: [
            { iconClass: "fab fa-facebook-f", link: "#" },
            { iconClass: "fab fa-twitter", link: "#" },
            { iconClass: "fab fa-instagram", link: "#" },
            { iconClass: "fab fa-linkedin-in", link: "#" },
        ],
    },
];
</script>

<style scoped>
/* Eğer özelleştirilmiş stil eklemek isterseniz buraya yazabilirsiniz */
</style>
