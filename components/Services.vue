<template>
    <section class="py-16" id="services">
        <div class="container mx-auto text-center">
            <h2 class="text-4xl font-bold text-white mb-4">SERVICES</h2>
            <p class="text-gray-300 text-lg mb-12">Meet Our Services</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <div
                    v-for="service in services"
                    :key="service.title"
                    class="bg-black text-center full-center flex-col text-white p-8 shadow-lg transition duration-300 group hover:bg-qirmizi"
                >
                    <div
                        class="text-red-500 text-4xl mb-4 group-hover:bg-white p-4 w-max transition duration-300"
                    >
                        <UIcon :name="service.icon" class="w-10 h-10" />
                    </div>
                    <h3 class="text-xl font-semibold mb-2">
                        {{ service.title }}
                    </h3>
                    <p
                        class="text-gray-400 duration-300 group-hover:text-white"
                    >
                        {{ service.description }}
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const services = [
    {
        title: "Online Courses",
        description:
            "We conduct online courses in various fields for young students.",
        icon: "fa6-solid:book",
    },
    {
        title: "Free Tours",
        description:
            "We organize free domestic and foreign trips for young people.",
        icon: "fa6-solid:users",
    },
    {
        title: "Free Certificates",
        description:
            "At the end of each online course, we provide a certificate to the young people.",
        icon: "fa6-solid:certificate",
    },
    {
        title: "Free Online Library",
        description: "Access for more than 1000+ books.",
        icon: "fa6-solid:book-open",
    },
    {
        title: "Career Development",
        description: "Free access to more than 100+ global competitions.",
        icon: "fa6-solid:briefcase",
    },
    {
        title: "Movie Nights",
        description: "Every month 3 free movie nights.",
        icon: "fa6-solid:film",
    },
];
</script>

<style>
/* FontAwesome Icons için gerekli CSS */
</style>
