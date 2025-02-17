<template>
    <section class="text-white w-screen py-16 bg-black" id="team">
        <div class="container mx-auto px-6">
            <h2 class="text-center text-4xl font-extrabold text-red-600 mb-4 uppercase tracking-wide">
                Team
            </h2>
            <p class="text-center mb-12 text-gray-400 text-lg max-w-2xl mx-auto">
                Sit sint consectetur velit quisquam cupiditate impedit suscipit alias.
            </p>

            <div class="flex flex-wrap justify-center gap-8">
                <div
                    v-for="(member, index) in teamMembers"
                    :key="index"
                    class="bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 max-w-xs text-center border border-gray-800 hover:border-red-600"
                >
                    <NuxtImg
                        :src="member.image"
                        :alt="member.name"
                        class="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-red-600 shadow-md"
                    />
                    <h3 class="text-xl font-semibold text-white">{{ member.name }}</h3>
                    <p class="text-sm text-red-400 mb-2 font-medium">{{ member.position }}</p>
                    <p class="text-sm text-gray-400 mb-4">
                        {{ member.description }}
                    </p>
                    <div class="flex justify-center space-x-4 mt-4">
                        <a
                            v-for="(icon, idx) in member.socials"
                            :key="idx"
                            :href="icon.link"
                            target="_blank"
                            class="text-gray-400 hover:text-red-500 transition-all duration-300 text-xl"
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
        image: "/images/team1.jpg",
        socials: [
            { iconClass: "fab fa-facebook", link: "#" },
            { iconClass: "fab fa-twitter", link: "#" },
            { iconClass: "fab fa-instagram", link: "#" },
            { iconClass: "fab fa-linkedin", link: "#" },
        ],
    },
    {
        name: "Iltifat Ibadzade",
        position: "Backend Developer",
        description:
            "Repellat fugiat adipisci nemo illum nesciunt voluptas repellendus.",
        image: "/images/team2.jpg",
        socials: [
            { iconClass: "fab fa-facebook", link: "#" },
            { iconClass: "fab fa-twitter", link: "#" },
            { iconClass: "fab fa-instagram", link: "#" },
            { iconClass: "fab fa-linkedin", link: "#" },
        ],
    },
];
</script>
